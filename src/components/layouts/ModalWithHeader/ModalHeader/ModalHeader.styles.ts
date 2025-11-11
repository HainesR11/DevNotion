import { Dimensions, StyleSheet } from 'react-native';

import { Theme } from '@DevEx/utils/styles/theme';

const { width } = Dimensions.get('screen');

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    gradientLine: {
      width: width,
      height: 5,
      marginBottom: theme.spacing.xs,
    },
    image: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    modalContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.m,
    },
    icon: {
      position: 'absolute',
    },
    iconLeft: {
      left: theme.spacing.xs,
    },
    iconRight: {
      right: theme.spacing.xs,
    },
  });

export default createStyles;
