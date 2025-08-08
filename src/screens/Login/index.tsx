import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Buffer } from 'buffer';
import { Animated, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { useGetTokensFromLogin } from '@DevEx/api/authentication';
import createUserNode from '@DevEx/api/authentication/useCreateUser';
import { Button, GradientText, Text } from '@DevEx/components';
import ModalWithHeader from '@DevEx/components/layouts/ModalWithHeader/ModalWithHeader';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import { TouchableText } from '@DevEx/components/Text/text';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { setAuth } from '@DevEx/utils/store/authSlice/authSlice';
import { setUser } from '@DevEx/utils/store/userSlice/userSlice';

import ForgotPassword from './ForgotPassword/ForgotPassword';

import createStyles from './Login.styles';

type TLoginSuccessData = {
  data: {
    OAuth: string;
    actions: string[];
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
    };
  };
};

type TLoginForm = {
  loginVisible: boolean;
  setLoginVisible: Dispatch<SetStateAction<boolean>>;
};

// const convertToBase64 = (file: any) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(console.log('---- base64 -----', fileReader.result));
//     };
//     fileReader.onerror = e => console.log('error', e);
//   });
// };

const LoginForm = ({ loginVisible, setLoginVisible }: TLoginForm) => {
  const styles = useThemedStyles(createStyles);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [createUser, setCreateUser] = useState<boolean>(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;

  const loginMutation = useGetTokensFromLogin();

  const onCreateUser = () => {
    const hashedPassword = Buffer.from(password, 'utf8').toString('base64');
    //TODO: Have here to create new user in Monolith as well
    //TODO: Change to use axios rather than useQuery
    createUserNode({
      email: username,
      password: hashedPassword,
      name,
    }).then(({ data }) => {
      dispatch(
        setUser({
          user: {
            email: data.email,
            name: data.name,
            usernmae: data.username,
            profilePic: data.image,
          },
          actions: data.actions,
          isAuthenticated: true,
        }),
      );
    });
  };

  const onLogin = async () => {
    const hashedPassword = Buffer.from(password, 'utf8').toString('base64');

    loginMutation.mutate(
      {
        email: username,
        password: hashedPassword,
      },
      {
        onError: (error: Error) => console.log('--- error ---', error),
        onSuccess: ({ data }: TLoginSuccessData) => {
          dispatch(
            setUser({
              user: { ...data.user },
              actions: data.actions,
              isAuthenticated: true,
            }),
          );
          dispatch(setAuth({ tokens: { OAuth: data.OAuth } }));
        },
      },
    );
  };

  useEffect(() => {
    createUser
      ? (Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }).start(),
        Animated.timing(positionAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }).start())
      : (Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(),
        Animated.timing(positionAnim, {
          toValue: -50,
          duration: 500,
          useNativeDriver: false,
        }).start());
  }, [createUser, fadeAnim, positionAnim]);

  if (forgotPassword) {
    return (
      <ModalWithHeader
        isFirstPage={false}
        isVisible={loginVisible}
        onRequestClose={() => {
          setLoginVisible(false);
          setForgotPassword(false);
        }}
        goBack={() => setForgotPassword(false)}
        testID="LoginModal"
      >
        <ForgotPassword />
      </ModalWithHeader>
    );
  }

  return (
    <ModalWithHeader
      isFirstPage={!createUser}
      isVisible={loginVisible}
      onRequestClose={() => {
        setLoginVisible(false);
        setCreateUser(false);
      }}
      goBack={createUser ? () => setCreateUser(false) : undefined}
      testID="LoginModal"
    >
      <View style={styles.screenContainer}>
        <View style={[styles.itemContainer]}>
          <View style={[styles.loginButtonContainer]}>
            <GradientText
              bold
              testID="gradientGetStartedText"
              text={!createUser ? 'Welcome,' : 'Create Account,'}
              gradientStyle="devexMainGradient"
              textStyle={styles.gradientText}
            />
            <Text
              text={
                !createUser ? 'Sign in to continue' : 'Sign up to get started'
              }
              testId="SignInText"
              textStyle={[styles.text]}
            />
          </View>
          <Animated.View style={{ top: positionAnim }}>
            <Animated.View
              style={[{ opacity: fadeAnim, bottom: positionAnim }]}
            >
              <OutlineTextInput
                style={[styles.inputStyle, styles.largeMarginBottom]}
                title={'Name'}
                testID=""
                onChange={event => setName(event.nativeEvent.text)}
              />
            </Animated.View>
            <OutlineTextInput
              style={[styles.inputStyle, styles.largeMarginBottom]}
              title={'Email Address'}
              testID=""
              onChange={event =>
                setUsername(event.nativeEvent.text.toLowerCase())
              }
            />
            <OutlineTextInput
              style={[styles.inputStyle, styles.smallMarginBottom]}
              title={'Password'}
              testID=""
              secureTextEntry
              onChange={event => setPassword(event.nativeEvent.text)}
            />
            {!createUser && (
              <TouchableText
                onPress={() => setForgotPassword(true)}
                textStyle={[styles.link]}
                text="Forgot Password?"
                testId="ForgotPassword.text"
              />
            )}
          </Animated.View>
          <View>
            <Button
              type="Primary"
              title={createUser ? 'Create User' : 'Login'}
              onPress={createUser ? onCreateUser : onLogin}
            />
            {!createUser ? (
              <View style={styles.createContainer}>
                <Text textStyle={styles.textAlign} text="New user?" testId="" />
                <TouchableOpacity onPress={() => setCreateUser(true)}>
                  <Text
                    textStyle={[styles.textAlign, styles.link]}
                    text="Create Account"
                    testId=""
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.createContainer}>
                <Text
                  textStyle={styles.textAlign}
                  text="Have an account?"
                  testId=""
                />
                <TouchableOpacity onPress={() => setCreateUser(false)}>
                  <Text
                    textStyle={[styles.textAlign, styles.link]}
                    text="Login"
                    testId=""
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </ModalWithHeader>
  );
};
export default LoginForm;
