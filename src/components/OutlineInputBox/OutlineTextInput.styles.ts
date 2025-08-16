import { StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const createStyles = (theme: Theme) => {
  const my = theme.form.outlinedTextInput;
  const outlineOffset = my.outlineWidth + my.outlineGap;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      marginTop: theme.spacing.s,
      padding: theme.spacing.ml,
    },
    secureIcon: {
      marginTop: theme.spacing.s,
      marginRight: theme.spacing.ml,
    },
    textError: {
      color: theme.colors.errorDark,
    },
    outlineError: {
      borderColor: theme.colors.errorDark,
      borderWidth: 2,
    },
    outline: {
      borderWidth: my.outlineWidth,
      borderRadius: my.outlineRadius,
      top: my.focusedOutlineTopOffset + outlineOffset,
      left: outlineOffset,
      right: outlineOffset,
    },
    focusedOutline: {
      borderWidth: my.outlineWidth,
      borderRadius: my.focusedOutlineRadius,
      borderColor: theme.colors.focusedInputHighlight,
      top: my.focusedOutlineTopOffset,
      bottom: -outlineOffset,
    },
    outlineRegular: {
      borderColor: theme.colors.grey70,
    },
    titleContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: -5,
      start: theme.spacing.m,
      backgroundColor: theme.colors.mainBackground,
      paddingHorizontal: theme.spacing.s,
    },
    regularText: {
      color: theme.colors.grey70,
    },
  });
};

export default createStyles;
