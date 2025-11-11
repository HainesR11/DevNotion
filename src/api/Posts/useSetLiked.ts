import axios from 'axios';
import { useSelector } from 'react-redux';

import { OAUTH_TOKEN_HEADER } from '@DevEx/constants/headers';
import { RootState } from '@DevEx/utils/store/store';
// import {UseQueryOptions, useQuery} from '@tanstack/react-query';

// import {types as Types} from '@DevEx/utils/types';

// export type LikedVariables = Types.Exact<{
//   postId: string;
// }>;

// const SendLikedPosts = async (postId: any) => {
//   const {id} = useSelector((state: RootState) => state.user.user);
//   try {
//     const response = await axios.post(`/api/posts/${postId}/liked`, {
//       headers: {[OAUTH_TOKEN_HEADER]: 'token'},
//       data: {userId: id},
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (e) {
//     console.log('---error---', e);
//   }
// };

// export const useSendLikedPosts = <TData = any[], TError = unknown>(
//   variables?: LikedVariables,
//   options?: Omit<UseQueryOptions<[], TError, TData>, 'queryKey'> & {
//     queryKey?: UseQueryOptions<any[], TError, TData>['queryKey'];
//   },
// ) => {
//   return useQuery({
//     queryKey: variables === undefined ? ['unliked'] : ['liked', variables],
//     queryFn: SendLikedPosts,
//     ...options,
//   });
// };

// useSendLikedPosts.key = (variables: LikedVariables) =>
//   variables === undefined ? ['unliked'] : ['liked', variables];

const useSendLiked = async postId => {
  const { id } = useSelector((state: RootState) => state.user.user);
  try {
    const { data } = await axios.post(`/api/posts/${postId}/liked`, {
      headers: { [OAUTH_TOKEN_HEADER]: 'token' },
      data: { post_id: 'id', user_id: id },
    });
    return data;
  } catch (e) {
    console.log('---error---', e);
  }
};

export default useSendLiked;
