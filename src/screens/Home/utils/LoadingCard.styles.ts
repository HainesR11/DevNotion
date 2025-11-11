import { StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    LoadingRenderContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    LoadingUpdateContainer: {
      backgroundColor: colors.grey2,
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 25,
      width: '100%',
      height: '8%',
      marginBottom: 10,
      overflow: 'hidden',
      alignItems: 'center',
    },
    updateInputBox: {
      marginLeft: theme.spacing.m,
      textAlignVertical: 'top',
      color: colors.grey40,
      width: '82%',
    },
    updateImage: {
      width: 40,
      height: 40,
      borderRadius: 40,
    },

    LoadingCardContainer: {
      width: '90%',
      height: '18%',
      marginBottom: 10,
      borderRadius: 15,
      borderColor: colors.grey20,
      borderWidth: 0.5,
      display: 'flex',
      flexDirection: 'column',
    },
    LoadingCardTitleContainer: {
      height: '30%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 10,
    },
    LoadingCardTitlePicture: {
      width: '11%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: colors.grey10,
      borderRadius: 15,
    },
    LoadingCardTitleBar: {
      backgroundColor: colors.grey10,
      width: '80%',
      borderRadius: 7,
      overflow: 'hidden',
      height: 20,
    },

    LoadingCardTextBarLoader: {
      height: '100%',
      width: 10,
      backgroundColor: colors.shadowGrey,
    },
    LoadingCardTextBarContainer: {
      height: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    LoadingCardTextBar: {
      width: '94%',
      borderRadius: 6,
      height: '40%',
      overflow: 'hidden',
      backgroundColor: theme.colors.grey10,
    },
  });
