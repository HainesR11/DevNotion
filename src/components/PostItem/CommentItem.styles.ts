import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //PostItem

    PostItemContainer: {
      paddingVertical: theme.spacing.m,
      borderBottomColor: theme.colors.grey20,
      paddingHorizontal: theme.spacing.s,
      borderBottomWidth: 1,
    },
    PostItemDataConatiner: {
      marginVertical: theme.spacing.m,
      marginHorizontal: theme.spacing.sm,
    },
    PostItemCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    PostItemImage: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    PostItemUserContainer: {
      justifyContent: 'space-around',
      width: 150,
    },
    PostItemUsername: {
      color: theme.colors.grey50,
    },
    PostItemCommentInfo: {
      justifyContent: 'space-between',
      marginHorizontal: theme.spacing.sm,
    },
    PostItemShareInfo: {
      width: 120,
      justifyContent: 'space-around',
    },
    PostItemShareItem: {
      marginHorizontal: theme.spacing.s,
      width: 40,
      justifyContent: 'space-around',
    },
  });
export default createStyles;
