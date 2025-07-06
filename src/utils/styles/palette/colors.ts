const greyScale = {
  white: '#FFFFFF',
  grey2: '#FAFAFA',
  grey5: '#F2F2F2',
  grey10: '#E6E6E6',
  grey20: '#CCCCCC',
  grey40: '#999999',
  grey50: '#909090',
  grey60: '#666666',
  grey70: '#4D4D4D',
  grey80: '#333333',
  black: '#000000',
};

const primaryColors = {
  action: '#0073C5',
  positive: '#007E13',
  negative: '#DD1717',
  attention: '#F15A22',
};

const colors = {
  red: '#E73711',
  yellow: '#ede624',
  darkGreen: '#086300',
  lightGreen: '#15ff00',
  green: '#33912a',
  lightGrey: '#a9a9a9',
  purpleLight: '#7D7CA3',
  purplePrimary: '#000FF5',
  purpleDark: '#505074',
  primaryDark: '#000CC4',
  blue: '#000FF5',
  softMint: '#D1E0D7',
  steelBlue: '#607EBC',
  primaryBlue: '#006291',
  lightBlue: '#5271FF',
  errorLight: '#fc9d9d',
  errorDark: '#B11212',
  criticalRed: '#C1481B',
  shadowGrey: '#C4C4C426',
  orange: '#F15A22',
  techSummitPrimary: '#0000C5',

  ...primaryColors,
  ...greyScale,

  passwordWeak: '#C40000',
  passwordMedium: '#FF9E00',
  passwordStrong: '#16AC2E',
  deviceOnline: '#1AAB31',
  deviceOffline: '#9F9F9F',
  iconPrimary: '#0010f5',

  translucentDark: '#00000066',
  translucentWhite: '#FFFFFFC0',
};

export default colors;
