import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import useUpdateUserMutation from '@DevEx/api/authentication/useUpdateUser';
import { Button, Text } from '@DevEx/components';
import OutlineTextInput from '@DevEx/components/OutlineInputBox/OutlineInputBox';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { RootState } from '@DevEx/utils/store/store';
import { setUser } from '@DevEx/utils/store/userSlice/userSlice';

import createStyles from './Onboarding.styles';

type THasError = 'Internal' | 'Duplicate' | undefined;

const AddUsername = () => {
  const styles = useThemedStyles(createStyles);
  const [hasError, setHasError] = useState<THasError>(undefined);
  const [username, setUsername] = useState<string>('');
  const updateUserMutation = useUpdateUserMutation();
  const { user, actions } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const skipOnPress = () => {
    Alert.alert(
      'Continue without a Username?',
      `You will be given a temporary username.

      Note: Some features will be unavaliable.`,
      [
        {
          text: 'Continue',
          style: 'destructive',
          onPress: () =>
            dispatch(
              setUser({
                actions: actions?.filter(action => {
                  return action !== 'Onboarding';
                }),
              }),
            ),
        },
        {
          text: 'Go Back',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
      <View>
        <Text
          bold
          textStyle={styles.headerText}
          text={"Let's make this account yours"}
        />
        <Text
          bold
          textStyle={[styles.headerText, styles.padding]}
          text={'Why not add a username?'}
        />
        <Text
          textStyle={styles.extraText}
          text={'This will make it easier for other users to find you '}
        />
      </View>
      <View>
        <OutlineTextInput
          state={hasError ? 'error' : 'regular'}
          onChange={e => {
            setHasError(undefined);
            setUsername(e.nativeEvent.text.toLowerCase());
          }}
          title="Username"
          placeholder="Pick your username"
        />
        {hasError && (
          <Text
            text={
              hasError === 'Duplicate'
                ? 'Username already taken'
                : 'Somethign went wrong, Please try again'
            }
            textStyle={styles.errorText}
          />
        )}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          disabled={hasError === 'Duplicate' || !username}
          title="Continue"
          onPress={() =>
            updateUserMutation.mutate(
              { params: { username: username }, id: user.id },
              {
                onSuccess: ({ data }) => {
                  dispatch(
                    setUser({
                      user: { ...user, username: data.username },
                      actions: actions?.filter(action => {
                        return action !== 'Onboarding';
                      }),
                    }),
                  );
                },
                onError: (error: any) => {
                  console.log(error.error.codeName, 'test');
                  if (error.error.codeName === 'DuplicateKey') {
                    setHasError('Duplicate');
                  } else {
                    setHasError('Internal');
                  }
                },
              },
            )
          }
          type="Primary"
        />
        {/* <Button title="Logout" onPress={logout} type="Primary" /> */}
        <Button title="Add Later" onPress={skipOnPress} type="Secondary" />
      </View>
    </SafeAreaView>
  );
};

export default AddUsername;
