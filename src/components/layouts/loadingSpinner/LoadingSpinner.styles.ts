import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    spinnerItem: {
      width: 3,
      height: 10,
      backgroundColor: theme.colors.grey70,
      borderRadius: 20,
      display: 'flex',
      position: 'absolute',
    },
  });
export default createStyles;
