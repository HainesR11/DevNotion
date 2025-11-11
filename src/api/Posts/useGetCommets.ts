import axios from 'axios';
import env from 'react-native-config';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { OAUTH_TOKEN_HEADER } from '@DevEx/constants/headers';
import { types as Types } from '@DevEx/utils/types';

export type CommentsVariables = Types.Exact<{
  comment_id: string;
}>;

const fetchComments = async (comment_id: any) => {
  try {
    const { data } = await axios.get(`${env.NODE_SERVICE_URL}/api/posts`, {
      headers: { [OAUTH_TOKEN_HEADER]: 'token' },
      data: {
        comment_id,
      },
    });

    return data.data;
  } catch (e) {
    console.log('---error---', e);
  }
};

export const useGetComments = <TData = any[], TError = unknown>(
  variables: CommentsVariables,
  options?: Omit<UseQueryOptions<[], TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<any[], TError, TData>['queryKey'];
  },
) => {
  return useQuery({
    queryKey: ['comments', variables],
    queryFn: fetchComments,
    ...options,
  });
};

useGetComments.key = (variables: CommentsVariables) => ['comments', variables];
