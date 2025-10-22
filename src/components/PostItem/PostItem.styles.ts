import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create<any>({
    // Post Item styles
    PostContainer: {
      backgroundColor: theme.colors.white,
      marginHorizontal: 15,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginVertical: 7,
      paddingVertical: 10,
    },
    likeOptions: (number: number) => ({
      width: number >= 2 ? 37 : 30,
    }),
    commentOptions: (number: number) => ({
      width: number >= 2 ? 40 : 30,
    }),

    PostItemImage: {
      maxHeight: 200,
      minHeight: 200,
      alignSelf: 'center',
      width: '90%',
      overflow: 'hidden',
      borderRadius: 13,
      resizeMode: 'cover',
      marginVertical: theme.spacing.s,
    },
    PostItemImageOptionsContainer: {
      position: 'absolute',
      right: 30,
      top: 8,
    },
    PostItemTextContainer: {
      marginHorizontal: 30,
      marginVertical: 10,
    },

    PostItemContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    PostItemOptionsContainer: {
      width: '100%',
      flexDirection: 'row-reverse',
    },

    //Post Info Strip

    PostInfoStripContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 5,
      gap: 10,
    },

    PostInfoStripImage: {
      maxHeight: 40,
      minHeight: 40,
      minWidth: 40,
      maxWidth: 40,
      borderRadius: 20,
    },

    PostInfoUserContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    PostInfoUserTextContainer: {
      justifyContent: 'center',
      marginLeft: 10,
    },
    PostInfoLikeContainer: {
      justifyContent: 'space-between',
      width: 100,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },

    PostInfoLikeButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    PostItemCommentContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    //Liked Options Pill
    LikedOptionsPillContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: theme.spacing['3.5xl'],
      borderTopColor: theme.colors.grey10,
      borderTopWidth: 0.5,
    },
    LikedOptionsPillAnimatedContainer: {
      alignContent: 'center',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      backgroundColor: theme.colors.white,
      width: '50%',
      padding: 10,
      shadowColor: theme.colors.grey20,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      borderRadius: 20,
    },
    LikedOptionsPillText: {
      paddingTop: 10,
    },
  });
export default createStyles;
