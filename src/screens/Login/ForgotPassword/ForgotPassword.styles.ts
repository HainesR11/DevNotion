import { Dimensions, StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

const { height, width } = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: 20,
      height: height,
      alignItems: 'center',
    },
    inputContainer: {
      height: height / 3,
      alignItems: 'center',
    },
    checkedContainer: {
      height: height / 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    forgotTextContainer: {
      height: height / 10,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-around',
      marginBottom: theme.spacing['2xl'],
    },
    forgotText: {
      textAlign: 'center',
    },
    outlineTextBox: {
      width: width - width / 4,
    },

    //Instructions
    textColor: {
      color: colors.white,
    },

    errorText: {
      marginTop: theme.spacing.xs,
      color: theme.colors.errorDark,
    },

    //Code Sent
    AnimatedIcon: {
      marginTop: theme.spacing['2xl'],
      marginBottom: theme.spacing.m,
    },
    animatedText: {
      alignItems: 'center',
    },
    listPanel: {
      marginTop: theme.spacing['4xl'],
    },
  });
