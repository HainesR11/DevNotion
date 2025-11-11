import axios from 'axios';
import env from 'react-native-config';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

type TUpdateUserParams = {
  email?: string;
  username?: string;
  password?: string;
  actions?: string[];
  image?: string;
};

const updateUser = async ({
  params,
  id,
}: {
  params: TUpdateUserParams;
  id: number;
}) => {
  try {
    const response = await axios.patch(
      `${env.NODE_SERVICE_URL}/api/user/${id}`,
      {
        params,
      },
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

type TmutationParams = {
  params: TUpdateUserParams;
  id: number;
};

const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: Omit<
    UseMutationOptions<any, TError, TmutationParams, TContext>,
    'mutationKey'
  > & {
    mutationKey?: UseMutationOptions<
      any,
      TError,
      TmutationParams,
      TContext
    >['mutationKey'];
  },
) =>
  useMutation({
    mutationKey: ['createUser'],
    mutationFn: (variables: TmutationParams) =>
      updateUser({ params: variables.params, id: variables.id }),
    ...options,
  });

export default useUpdateUserMutation;
