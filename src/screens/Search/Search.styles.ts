import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';
import colors from '@DevEx/utils/styles/palette/colors';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    searchListContainer: {
      maxHeight: 280,
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
      fontSize: theme.spacing.s,
      color: colors.steelBlue,
      textAlign: 'center',
      marginRight: theme.spacing.ssm,
    },
    searchListOptionsRecents: {
      fontSize: theme.spacing.sm,
      textAlign: 'center',
    },
  });

export default createStyles;
