import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-between',
      marginVertical: theme.spacing.xs,
      // mar
    },
    icon: {
      flex: 1,
    },
    text: {
      flex: 7,
      alignSelf: 'center',
      textAlignVertical: 'center',
    },
  });

export default createStyles;
