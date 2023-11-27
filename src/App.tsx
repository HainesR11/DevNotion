import React, {useEffect} from 'react';
import {Appearance, Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import {persist, store} from '@DevEx/utils/store/store';

import ErrorBoundary from './ErrorBoundry';
import AppStatusCheck from './StatusCheck';
import OnboardingWrapper from './components/OnboardingWrapper/OnboardingWrapper';
import LaunchNavigator from './navigators/RootNavigation/LaunchNavigator';
import theme from './utils/styles/theme';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle={'dark-content'} />
      ) : undefined}
      <Provider store={store}>
        <ErrorBoundary>
          <AppStatusCheck>
            <PersistGate persistor={persist}>
              <OnboardingWrapper>
                <NavigationContainer>
                  <LaunchNavigator />
                </NavigationContainer>
              </OnboardingWrapper>
            </PersistGate>
          </AppStatusCheck>
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
