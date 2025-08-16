import { Dimensions, StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

const { width, height } = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      container: {
        width: width - width / 4,
        height: height / 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      borderRadius: 10,
      primaryText: {
        color: 'white',
      },
      secondaryText: {
        color: colors.blue,
      },
    },
    radio: {
      width: 19,
      height: 19,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.grey20,
      //   borderWidth: 2,
      borderRadius: 20,
    },
    radioContainer: {
      width: width / 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    background: {
      backgroundColor: theme.buttons.primary.background,
    },
    disbaledBackground: {
      backgroundColor: theme.buttons.disabled.background,
    },
  });
