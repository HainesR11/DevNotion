import {Theme} from '@DevEx/utils/styles/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: width - width / 4,
      height: height / 15,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: theme.colors.grey10,
      borderRadius: 7,
      padding: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    textInput: {
      width: width / 1.75,
    },
  });