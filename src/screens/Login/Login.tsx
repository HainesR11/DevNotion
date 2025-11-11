import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Button } from '@DevEx/components';
import { Text } from '@DevEx/components';
import { strings } from '@DevEx/constants/stings';
import { useThemedStyles } from '@DevEx/hooks/UseThemeStyles';
import { RootState } from '@DevEx/utils/store/store';
import colors from '@DevEx/utils/styles/palette/colors';

import LoginForm from './index';

import createStyles from './Login.styles';

const Login = () => {
  const styles = useThemedStyles(createStyles);

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView>
      {/*Look at using Auth0 instead or custom made screen - Provides Jwt token, hashing, screen etc?*/}
      <LoginForm
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
      />

      {!isAuthenticated && (
        <View style={[styles.viewContainer]}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('@DevEx/assets/DevExIcon.png')}
              style={{ width: 300, height: 300 }}
            />
            <Text
              text={strings.loginWelcome}
              testId="WelcomeText"
              bold
              textStyle={{ fontSize: 25, marginVertical: 10 }}
            />
            <Text
              text={strings.loginText}
              testId=""
              textStyle={{
                color: colors.grey50,
                textAlign: 'center',
                width: 250,
                marginTop: 10,
              }}
            />
          </View>
          <View style={styles.loginButtonContainer}>
            <Button
              type="Primary"
              title="Continue"
              onPress={() => setLoginVisible(true)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
