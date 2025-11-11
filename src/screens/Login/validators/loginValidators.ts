import { Buffer } from 'buffer';

export const FnEmailValidator = (emailText: string) => {
  // TODO: Find Suitable Validator - Potentionaly react-native-form-validator
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(emailText) === false) {
    return false;
  } else {
    return true;
    // setUserToken();
  }
};

export const FnPasswordCheck = (
  passwordText: string,
  emailValid: boolean | undefined,
  onSuccess: (value: boolean) => void,
) => {
  //Will call back end to check password matches
  if (emailValid) {
    if (passwordText === 'test') {
      onSuccess(true);
      console.log(passwordText === 'test', 'testing password fn');
    } else {
      onSuccess(false);
    }
  } else {
    onSuccess(true);
  }
};

export const TestText = (password: string) => {
  // Testing encoding - will later impement into onLogin Function
  console.log(password);
  const encode = Buffer.from(password, 'utf-8').toString('base64');
  console.log(encode);
  const decode = Buffer.from(encode, 'base64').toString('utf8');
  console.log(decode);
};
