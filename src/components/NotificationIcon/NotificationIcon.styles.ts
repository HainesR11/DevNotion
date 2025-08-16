import { StyleSheet } from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';

const createStyles = () =>
  StyleSheet.create({
    notificationDot: {
      position: 'absolute',
      zIndex: 1,
      top: '0%',
      right: '0%',
      width: 8,
      height: 8,
      borderRadius: 5,
      backgroundColor: colors.red,
    },
    numberText: {
      color: colors.white,
    },
    notificationNumberedDot: {
      position: 'absolute',
      zIndex: 1,
      top: '0%',
      right: '0%',
      width: 14,
      height: 14,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: colors.red,
    },
  });

export default createStyles;
