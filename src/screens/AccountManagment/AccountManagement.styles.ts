import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //Account Item
    AccountItemContainer: {
      height: theme.spacing['4xl'],
      marginTop: theme.spacing.sm,
      borderBottomColor: theme.colors.grey50,
      borderBottomWidth: 1,
      justifyContent: 'center',
    },
    AccountItemText: {
      marginLeft: theme.spacing.xl,
      //   fontFamily:
    },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: theme.spacing.xl,
      borderBottomColor: theme.colors.grey50,
      backgroundColor: theme.colors.grey10,
      borderBottomWidth: 1,
    },
    AccountManagementImage: {
      width: 100,
      height: 100,
      borderRadius: 100,
      marginRight: theme.spacing.ml,
    },
    gradientHeaderText: {
      fontSize: 20,
    },
    logoutButton: {
      alignItems: 'center',
    },
    headerText: {
      marginTop: theme.spacing.m,
      paddingLeft: theme.spacing.s,
    },
    accountManagmentContainer: {
      height: '100%',
      algin: 'center',
      justifyContent: 'space-between',
    },
  });

export default createStyles;
