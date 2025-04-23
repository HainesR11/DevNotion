import {StyleSheet} from 'react-native';

import {Theme} from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    animatedView: {
      display: 'flex',
      alignItems: 'center',
      maxHeight: 40,
      alignSelf: 'flex-start',
    },

    searchBarContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    animatedText: {
      paddingTop: 10,
      textAlign: 'center',
      justifyContent: 'center',
    },

    searchInput: {
      flex: theme.spacing.xs,
    },
  });

export default createStyles;
