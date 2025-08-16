import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const { width, height } = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    screenContainer: {
      width: width,
      height: height - 200,
      alignItems: 'center',
      paddingHorizontal: theme.spacing.m,
      justifyContent: 'center',
    },
    container: {
      width: width - width / 10,
      height: height / 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    paragraph: {
      fontSize: 15,
      textAlign: 'center',
      color: theme.colors.grey50,
    },
  });

export default createStyles;
