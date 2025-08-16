import { useDispatch } from 'react-redux';

import { clearAuth } from '@DevEx/utils/store/authSlice/authSlice';
import { clearUser } from '@DevEx/utils/store/userSlice/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    try {
      dispatch(clearAuth());
      dispatch(clearUser());
    } catch (error) {
      console.log('----- Error -----');
      console.log(error);
    }
  };
  return logout;
};

export default useLogout;
