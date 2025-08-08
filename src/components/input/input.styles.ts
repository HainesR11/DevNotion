import {Dimensions, StyleSheet} from 'react-native';

import colors from '@DevEx/utils/styles/palette/colors';
import {Theme} from '@DevEx/utils/styles/theme';

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
      marginBottom: 20,
      alignItems: 'center',
    },
    textInput: {
      width: width / 1.75,
      height: '100%',
    },
    Error: {
      borderWidth: 2,
      borderColor: colors.criticalRed,
    },
    loading: {
      color: colors.lightGrey,
    },
  });

// export const createSearchStyles = (theme: Theme) => StyleSheet.create({

// });
