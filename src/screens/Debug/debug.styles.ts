import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //DebugScreen
    Container: {
      alignItems: 'center',
      marginTop: theme.spacing.sm,
    },
    debugInfoContainer: {
      marginBottom: theme.spacing.sm,
    },

    gradientTextStyle: {
      fontSize: 25,
    },

    //DebugItem
    DebugItemContainer: {
      paddingVertical: theme.spacing.ml,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomColor: theme.colors.grey20,
      borderBottomWidth: 1,
    },
    DebugItemTitle: {
      width: '50%',
      textAlign: 'center',
    },
    DebugItemValue: {
      width: '50%',
      textAlign: 'center',
      color: theme.colors.grey50,
    },
  });
export default createStyles;
