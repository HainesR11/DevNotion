import { Platform } from 'react-native';

const isIOS = (trueValue: any, falseValue: any) => {
  return Platform.OS === 'ios' ? trueValue : falseValue;
};
export default isIOS;
