import axios from 'axios';
import env from 'react-native-config';

export type TTokenFromLoginVairables = {
  email: string;
  password: string;
};

export type TTokenFromLoginMutation = {
  typename?: 'RootMutationType';
  OAuth: string;
  user: {
    name: string;
    username: string;
    email: string;
  };
};

const fetchGetTokenFromLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.get(
      `${env.NODE_SERVICE_URL}/api/authentication`,
      {
        params: {
          email,
          password,
        },
      },
    );

    return data;
  } catch (error) {
    console.log('--- error (catch) ---', error);
  }
};

export default fetchGetTokenFromLogin;
