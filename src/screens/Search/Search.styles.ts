import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    searchListContainer: {
      height: '97%',
      marginTop: theme.spacing.ssm,
    },
    searchListOptionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.ml,
      marginTop: theme.spacing.ssm,
      alignItems: 'center',
    },
    searchListOptionsClear: {
      fontSize: theme.spacing.sm,
      textAlign: 'center',
      marginRight: theme.spacing.ssm,
      marginTop: theme.spacing.xs,
      fontWeight: 'bold',
    },
    searchListOptionsRecents: {
      fontSize: theme.spacing.sm,
      textAlign: 'center',
    },
  });

export default createStyles;
