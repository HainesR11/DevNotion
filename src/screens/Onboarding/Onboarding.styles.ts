import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: '45%',
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.l,
      marginVertical: theme.spacing.l,
    },
    headerText: {
      fontSize: 23,
      fontFamily: 'RobotoMono-Regular',
    },
    extraText: {
      fontSize: 13,
      fontFamily: 'RobotoMono-Regular',
    },
    padding: {
      paddingBottom: theme.spacing.sm,
    },
    errorText: {
      color: theme.colors.errorDark,
      marginLeft: theme.spacing.sm,
      marginTop: theme.spacing.s,
    },
  });
export default createStyles;
