import { Dimensions, StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

const { height } = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    // Modal view
    screenContainer: {
      height: height - height / 5,
      display: 'flex',
      justifyContent: 'space-around',
    },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'space-around',
      height: height - height / 3,
    },
    gradientText: { fontSize: 30, textAlign: 'center' },
    image: {
      marginBottom: theme.spacing.m,
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    textAlign: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.s,
    },
    text: {
      color: colors.grey50,
    },
    inputStyle: {
      width: 350,
    },
    smallMarginBottom: {
      marginBottom: theme.spacing.s,
    },
    largeMarginBottom: {
      marginBottom: theme.spacing.xl,
    },
    createContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      color: colors.blue,
      marginLeft: theme.spacing.xs,
    },
    forgotText: {
      textAlign: 'right',
    },
    //Main login screen
    viewContainer: {
      paddingTop: theme.spacing.m,
      height: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    loginButtonContainer: {
      padding: theme.spacing.m,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

export default createStyles;
