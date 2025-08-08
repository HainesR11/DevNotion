import { useSelector } from 'react-redux';

import useLogout from '@DevEx/utils/functions/useLogout/useLogout';
import { RootState } from '@DevEx/utils/store/store';

import { createAxios } from './createAxios';
import { logoutOnNoAuth } from './utils/callbacks';

export const useAxios = <TData, TVariables>(
  query: string,
): ((variables?: TVariables) => Promise<TData>) => {
  const auth = useSelector((store: RootState) => store.auth);
  const user = useSelector((store: RootState) => store.user);
  const logout = useLogout();

  return createAxios({
    query,
    //Pass error in here to check if unauthenticated
    errorCallback: () => logoutOnNoAuth(logout),
    user,
    auth,
  });
};
