import { createTheme } from '@shopify/restyle';

import colors from './palette/colors';
import padding from './spacing/padding';

export const gradients = {
  devexMainGradient: [colors.steelBlue, colors.softMint],
  vipSilverGradient: ['#708186', '#A1ACB2'],
  vipGoldGradient: ['#C88B2E', '#E6BB63'],
  vipPlatinumGradient: ['#6E6C89', '#8D8DBE'],
  vipDiamondGradient: ['#191919', '#474747'],
};

const theme = createTheme({
  colors: {
    mainBackground: colors.white,
    mainForeground: colors.black,
    cardPrimaryBackground: colors.white,
    buttonPrimaryBackground: colors.purplePrimary,
    modalBackground: colors.grey2,
    inactiveTab: colors.grey20,
    activeTab: colors.primaryDark,
    focusedInputHighlight: colors.purplePrimary,
    carouselCount: colors.grey50,
    carouselFallback: colors.grey50,
    action: colors.action,
    positive: colors.positive,
    negative: colors.negative,
    listDivider: colors.grey20,
    white: colors.white,
    cardBorderColor: colors.grey5,
    avatarBackground: colors.grey2,
    grey2: colors.grey2,
    grey5: colors.grey5,
    grey10: colors.grey10,
    grey20: colors.grey20,
    grey50: colors.grey50,
    grey70: colors.grey70,
    errorDark: colors.errorDark,
    errorLight: colors.errorLight,
    rewardsOrange: colors.orange,
    informationTileBackground: colors.grey10,
    primaryNumber: colors.blue,
    passwordGrey: colors.grey80,
    passwordWeak: colors.passwordWeak,
    passwordMedium: colors.passwordMedium,
    passwordStrong: colors.passwordStrong,
    translucentDark: colors.translucentDark,
    translucentWhite: colors.translucentWhite,
    iconPrimary: colors.iconPrimary,
    positiveTickColor: colors.positive,
    deviceOnline: colors.deviceOnline,
    deviceOffline: colors.grey50,
    groupsBackground: colors.grey2,
  },
  spacing: {
    ...padding,
    tabBarOffset: 80,
  },
  breakpoints: {},
  buttons: {
    primary: {
      background: colors.steelBlue,
      foreground: colors.white,
    },
    secondary: {
      background: colors.white,
      foreground: colors.blue,
    },
    disabled: {
      background: colors.grey20,
      foreground: colors.white,
    },
    danger: {
      background: colors.errorDark,
      foreground: colors.errorDark,
    },
    basic: {
      selected: { border: colors.blue },
      unselected: { border: colors.grey20 },
    },
  },
  form: {
    outlinedTextInput: {
      outlineWidth: 1,
      outlineGap: 2,
      outlineRadius: 5,
      focusedOutlineTopOffset: 5,
      focusedOutlineRadius: 7,
    },
    radioList: {
      indicator: {
        width: 30,
        innerWidth: 20,
        borderWidth: 2,
        selectedColor: colors.purplePrimary,
        unselectedColor: colors.grey20,
      },
    },
    toggle: {
      active: colors.blue,
      inactive: colors.grey20,
      switch: colors.white,
      size: {
        switch: { width: 24, positionOffset: 20 },
        container: { height: 26, width: 46, radius: 40 },
      },
    },
  },
  screens: {
    insetBottom: padding.xl,
    marginHorizontal: padding.l,
    marginTop: padding.m,
  },
  notification: {
    accentColor: colors.blue,
    activeDot: colors.primaryDark,
  },
  centreAlign: {
    alignItems: 'center',
  },
});

export type Theme = typeof theme;
export default theme;
