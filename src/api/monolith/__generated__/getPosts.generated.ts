import {useQuery, UseQueryOptions} from '@tanstack/react-query';

import * as Types from '@DevEx/api/monolith/types';

import {useAxios} from '../useAxios';
export type GetPostsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;

export type GetPostsQuery = {
  __typename?: 'Query';
  posts?: Array<{
    __typename?: 'Post';
    id: string;
    title?: string | null;
    content?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    author?: {__typename?: 'User'; name?: string | null} | null;
  } | null> | null;
};

export const GetPostsDocument = `
    query GetPosts($limit: Int, $offset: Int) {
  posts(limit: $limit, offset: $offset) {
    id
    title
    content
    author {
      name
    }
    createdAt
    updatedAt
  }
}
    `;

export const useGetPostsQuery = <TData = GetPostsQuery, TError = unknown>(
  variables?: GetPostsQueryVariables,
  options?: Omit<UseQueryOptions<GetPostsQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetPostsQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<GetPostsQuery, TError, TData>({
    queryKey: variables === undefined ? ['GetPosts'] : ['GetPosts', variables],
    queryFn: useAxios<GetPostsQuery, GetPostsQueryVariables>(
      GetPostsDocument,
    ).bind(null, variables),
    ...options,
  });
};

useGetPostsQuery.getKey = (variables?: GetPostsQueryVariables) =>
  variables === undefined ? ['GetPosts'] : ['GetPosts', variables];
