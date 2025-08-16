import { StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    //Home
    HomeScrollView: {
      height: '100%',
    },
    LoadingSpinnerContainer: {
      position: 'relative',
      zIndex: -1,
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      overflow: 'visible',
    },
    updateContainer: {
      zIndex: 1,
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing.xxs,
      padding: 10,
      backgroundColor: colors.grey2,
    },
    updateInputBox: {
      marginLeft: theme.spacing.m,
      textAlignVertical: 'top',
      width: '82%',
      alignSelf: 'center',
      marginTop: -5,
    },
    updateImage: {
      width: 40,
      height: 40,
      borderRadius: 40,
    },
  });

export default createStyles;
