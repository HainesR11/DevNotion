import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Button, GradientText, Text } from '@DevEx/components';
import ListPanel from '@DevEx/components/ListPanel/ListPanel';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import { codeSentString } from '@DevEx/constants';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import theme from '@DevEx/utils/styles/theme';

import { FnEmailValidator } from '../validators/loginValidators';

import { createStyles } from './ForgotPassword.styles';

type Email = string;

const CodeSent = ({
  rotateAnim,
  fadeInAnim,
  setActiveStep,
  instructions,
  activeStep,
}: {
  rotateAnim: any;
  fadeInAnim: any;
  setActiveStep: (number: number) => void;
  instructions: { id: number; text: string }[];
  activeStep: number;
}) => {
  const styles = useThemedStyles(createStyles);
  const [rotateFin, setRotateFin] = useState(false);
  useEffect(() => {
    setActiveStep(2);
    rotateFin &&
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => setRotateFin(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotateFin]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <View style={styles.checkedContainer}>
        <Animated.View
          style={[styles.AnimatedIcon, { transform: [{ rotate: spin }] }]}
          onResponderEnd={() => console.log('testing')}
        >
          <FontAwesomeIcon icon={faCircleCheck} color="green" size={50} />
        </Animated.View>
        <Animated.View style={[styles.animatedText, { opacity: fadeInAnim }]}>
          <Text text={codeSentString} />
          <ListPanel
            style={styles.listPanel}
            active={activeStep}
            title={'Reset your password in 3 easy stps'}
            data={instructions}
          />
        </Animated.View>
      </View>
    </>
  );
};

const ForgotPassword = () => {
  const styles = useThemedStyles(createStyles);

  const [email, setEmail] = useState<Email>('');
  const [error, setError] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(1);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const instructions = [
    { id: 1, text: 'Enter your email address' },
    { id: 2, text: 'Check your emails' },
    { id: 3, text: 'Enter new password' },
  ];

  const validator = () => {
    const emailValid = FnEmailValidator(email);
    if (!emailValid) {
      setError(true);
    } else {
      setConfirmed(true);
      setError(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {confirmed ? (
        <CodeSent
          rotateAnim={rotateAnim}
          fadeInAnim={fadeInAnim}
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          instructions={instructions}
        />
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <View style={styles.checkedContainer}>
              <View style={styles.forgotTextContainer}>
                <GradientText
                  bold
                  textStyle={{
                    fontSize: theme.spacing.xl,
                  }}
                  text="Reset Password"
                  gradientStyle="devexMainGradient"
                />
                <Text
                  textStyle={styles.forgotText}
                  text="Please enter your Email Address used to sign into your account"
                />
              </View>
              <OutlineTextInput
                // errorLine={error}
                state={error ? 'error' : 'regular'}
                style={[styles.outlineTextBox]}
                title="Email"
                onChange={e => {
                  error && setError(false);
                  setEmail(e.nativeEvent.text);
                }}
                placeholder="e.g. name@mail.com"
              />
              {error && (
                <Text textStyle={styles.errorText} text="Invalid Email" />
              )}
            </View>
            <Button type="Primary" title="Send Code" onPress={validator} />
          </View>
          <ListPanel
            active={activeStep}
            title={'Reset your password in 3 easy stps'}
            data={instructions}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ForgotPassword;
