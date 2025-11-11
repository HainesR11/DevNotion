import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from '@DevEx/utils/styles/theme';

type StyleSheetDict = ReturnType<typeof StyleSheet.create>;
export const useThemedStyles = <A extends StyleSheetDict>(
  createStyles: (theme: Theme) => A,
) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [createStyles, theme]);
  return styles;
};
