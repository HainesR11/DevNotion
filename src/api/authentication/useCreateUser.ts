import axios from 'axios';
import env from 'react-native-config';
import { OAUTH_TOKEN_HEADER } from '@DevEx/constants/headers';

type TUserData = {
  email: string;
  password: string;
  CSUID: string;
};

const createUserNode = async userData => {
  const response = await axios.post(
    `${env.NODE_SERVICE_URL}/api/authentication`,
    { ...userData },
    {
      headers: {
        [OAUTH_TOKEN_HEADER]: env.MONOLITH_API_TOKEN,
      },
    },
  );

  if (response.status !== 201) {
    throw new Error('Failed to create user');
  }

  return response.data;
};

export default createUserNode;
