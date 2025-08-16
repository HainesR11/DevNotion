import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { setupStore, store } from '@DevEx/utils/store/store';
import theme from '@DevEx/utils/styles/theme';

interface TestWrapperProps {
  children: ReactNode;
  config?: {
    store: any;
  };
}

const TestWrapper: FC<TestWrapperProps> = ({ children, config }) => {
  const storeOveride = config?.store ? setupStore(config?.store) : store;

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
      mutations: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={storeOveride}>
        <QueryClientProvider client={client}>
          <NavigationContainer>{children}</NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default TestWrapper;
