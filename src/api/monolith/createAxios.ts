import axios, { AxiosResponse } from 'axios';
import env from 'react-native-config';
import uuid from 'react-native-uuid';

import { EncryptedAuthState } from '@DevEx/utils/store/authSlice/authSlice';
import { TUserState } from '@DevEx/utils/store/userSlice/userSlice';

import MonolithError from './errors/MonolithError';
import getErrorData from './utils/getErrorData';

type CreateAxiosFunction<TData, TVariables> = (
  variables?: TVariables,
) => Promise<TData>;

interface CreateAxiosParams {
  query: string;
  user: TUserState;
  auth: EncryptedAuthState;
  errorCallback: (error: unknown) => void;
  throwOnError?: boolean;
  timeout?: number;
  additionalHeaders?: Record<string, string>;
}

const selectData = (response: AxiosResponse) => response?.data?.data;

const getAuthToken = (legacyToken?: string) => {
  const authToken = legacyToken;
  return authToken;
};

const getAxiosHeaders = (authToken?: string) => {
  const headers: Record<string, string> = {
    authorization: `Bearer ${authToken}`,
    'X-API-TOKEN': env.MONOLITH_API_TOKEN,
  };

  return headers;
};

export const createAxios = <TData, TVariables>({
  query,
  user,
  auth,
  errorCallback,
  throwOnError = false,
  timeout = 0,
  additionalHeaders,
}: CreateAxiosParams): CreateAxiosFunction<TData, TVariables> => {
  return async (variables?: TVariables): Promise<TData> => {
    const authToken = getAuthToken(auth.tokens?.OAuth);

    // Validate we have a token, because there are no circumstances we should be making a request without a token.
    // In doing so, we'll immediately get a 401 back.
    if (!authToken) {
      throw new Error('No token provided, so cannot execute request');
    }

    const correlationId = uuid.v4();
    const headers = {
      ...getAxiosHeaders(authToken),
      ...additionalHeaders,
    };

    const errorData = getErrorData({
      user,
      query,
      correlationId,
    });

    const client = axios.create({
      headers,
      timeout,
    });

    try {
      const response = await client.post(
        env.MONOLITH_API,
        { query, variables },
        {
          headers: {
            'x-request-id': correlationId,
            NotionCESA01: authToken,
          },
        },
      );

      const errors = response?.data?.errors;
      if (errors) {
        if (throwOnError) {
          throw new MonolithError(
            'Errors occurred during GQL request',
            errors,
            query,
          );
        }
      }
      return selectData(response);
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
      }

      console.log({ errorData, error });

      throw error;
    }
  };
};
