import { useDispatch } from 'react-redux';

import { setUser } from '@DevEx/utils/store/userSlice/userSlice';

import { accountDetailsStub } from '../stubs';

const useAccountDetailsScript = () => {
  const dipsatch = useDispatch();

  dipsatch(setUser(accountDetailsStub));
};
export default useAccountDetailsScript;
