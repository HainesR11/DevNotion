import { Dimensions, StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

const { width } = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    instructionsContainer: {
      width: width - width / 5,
      paddingVertical: theme.spacing['2xl'],
      borderRadius: 20,
      backgroundColor: colors.grey50,
    },
    instructionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },

    inActiveStep: {
      backgroundColor: colors.translucentWhite,
      color: colors.black,
    },

    activeStep: {
      backgroundColor: colors.lightBlue,
    },

    instructionId: {
      justifyContent: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 20,
      textAlign: 'center',
      marginLeft: theme.spacing.ml,
      marginRight: theme.spacing.ml,
    },

    textColor: {
      color: colors.white,
    },

    instructionHeader: {
      textAlign: 'center',
      fontSize: theme.spacing.m,
      marginBottom: theme.spacing.ml,
    },

    instructionIdNumber: {
      color: colors.black,
    },
  });

export default createStyles;
