import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';

import { setUser } from '@DevEx/utils/store/userSlice/userSlice';

const useDarkMode = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const darkmode = Appearance.getColorScheme() === 'dark' ? true : false;
    dispatch(setUser({ isDarkMode: darkmode }));
  }, [dispatch]);
};
export default useDarkMode;
