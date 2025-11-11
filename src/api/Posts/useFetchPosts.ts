import axios from 'axios';
import env from 'react-native-config';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { OAUTH_TOKEN_HEADER } from '@DevEx/constants/headers';
import { THomeScreenDataItem } from '@DevEx/utils/types/types';

const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${env.NODE_SERVICE_URL}/api/posts`, {
      headers: { [OAUTH_TOKEN_HEADER]: 'token' },
    });

    return data.data;
  } catch (e) {
    console.log('---error---', e);
  }
};

export const useGetPosts = <TData = THomeScreenDataItem[], TError = unknown>(
  options?: Omit<
    UseQueryOptions<THomeScreenDataItem[], TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      THomeScreenDataItem[],
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    ...options,
  });
};

useGetPosts.key = () => ['posts'];
