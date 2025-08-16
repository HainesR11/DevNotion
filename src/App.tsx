import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

import { persist, store } from '@DevEx/utils/store/store';

import ErrorBoundary from './ErrorBoundry';
import QueryClient from './QueryClient';
import AppStatusCheck from './StatusCheck';
import OnboardingWrapper from './components/OnboardingWrapper/OnboardingWrapper';
import LaunchNavigator from './navigators/RootNavigation/LaunchNavigator';
import { fetchFirebase } from './utils/firebase';
import theme from './utils/styles/theme';

async function ActivateFirebase() {
  await fetchFirebase();
}

const App = () => {
  useEffect(() => {
    ActivateFirebase();
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle={'dark-content'} />
      ) : undefined}
      <Provider store={store}>
        <SafeAreaProvider>
          <ErrorBoundary>
            <QueryClient>
              <AppStatusCheck>
                <PersistGate persistor={persist}>
                  <OnboardingWrapper>
                    <NavigationContainer>
                      <LaunchNavigator />
                    </NavigationContainer>
                  </OnboardingWrapper>
                </PersistGate>
              </AppStatusCheck>
            </QueryClient>
          </ErrorBoundary>
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
