import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const { width } = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    Container: {
      display: 'flex',
      flexDirection: 'row',
      width: width,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },
    firstContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: width,
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between',
    },

    container: {
      flex: 1,
      backgroundColor: theme.colors.modalBackground,
    },
    contentContainer: {
      flexGrow: 1,
    },

    header: {
      alignItems: 'center',
      height: theme.spacing['3xl'],
      borderBottomColor: theme.colors.grey5,
      borderBottomWidth: 1.5,
    },
    gradientLine: {
      width: width,
      height: 5,
      marginBottom: theme.spacing.xs,
    },
    image: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    iconContainer: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      flex: 3,
      width: width - 30,
      alignItems: 'center',
    },
    offset: {
      paddingLeft: width / 2 - 32.5,
    },
  });

export default createStyles;
