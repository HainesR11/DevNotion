import dayjs from 'dayjs';

import { TUserState } from '@DevEx/utils/store/userSlice/userSlice';

type ErrorData = {
  isAuthenticated: boolean;
  isFirstVisit: boolean;
  timestamp: number;
  correlationId: string;
};

const getErrorData = ({
  user,
  correlationId,
}: {
  user: TUserState;
  query: string;
  gsmSessionId?: string;
  correlationId: string;
}): ErrorData => {
  const timestamp = dayjs().unix();

  return {
    isAuthenticated: user.isAuthenticated,
    isFirstVisit: user.isFirstVisit,
    timestamp,
    correlationId,
  };
};

export default getErrorData;
