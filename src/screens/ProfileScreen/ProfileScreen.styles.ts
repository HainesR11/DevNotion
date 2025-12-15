import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    profileInfoContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 32,
      justifyContent: 'space-around',
    },
    userIcon: {
      display: 'flex',
      flex: 2,
    },
    userInfo: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
    },
  });

export default createStyles;
