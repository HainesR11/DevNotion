import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

interface IQClientProviderProps {
  children: React.ReactNode;
}

const getQueryConfig = () => {
  // repace with call to firebase
  const persistOffline = true;
  const staleTime = 300000;
  const cacheTime = 600000;
  const retry = 1;
  return { cacheTime, staleTime, persistOffline, retry };
};

const queryClient = (cacheTime: number, staleTime: number, retry: number) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: cacheTime,
        staleTime: staleTime,
        retry: retry,
      },
      mutations: {
        networkMode: 'online',
        retry: false,
      },
    },
  });
const QClientProvider = ({ children }: IQClientProviderProps) => {
  const { cacheTime, staleTime, persistOffline, retry } = getQueryConfig();
  const _queryClient = queryClient(cacheTime, staleTime, retry);
  if (persistOffline) {
    const persister = createAsyncStoragePersister({
      storage: AsyncStorage,
      key: 'DEVEX_OFFLINE_CACHE',
    });
    return (
      <PersistQueryClientProvider
        persistOptions={{ persister }}
        client={_queryClient}
      >
        {children}
      </PersistQueryClientProvider>
    );
  }
  return (
    <QueryClientProvider client={_queryClient}>{children}</QueryClientProvider>
  );
};
export default QClientProvider;
