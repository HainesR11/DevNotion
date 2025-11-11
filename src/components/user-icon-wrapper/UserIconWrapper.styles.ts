import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    placeholderContainer: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 25,
    },
    tabImage: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
      borderRadius: theme.spacing.ml,
    },
  });

export default createStyles;
