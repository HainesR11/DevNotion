import uuid from 'react-native-uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_SLICE } from '@DevEx/constants/sliceConstant';

type TTokens = {
  OAuth: string;
};

export interface EncryptedAuthState {
  tokens: TTokens | null;
  sessionID?: string | null;
}

const initialState: EncryptedAuthState = {
  tokens: null,
  sessionID: null,
};

const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<EncryptedAuthState>) => {
      const nextState = {
        ...state,
        ...action.payload,
        sessionID: uuid.v4() as string,
      };

      return nextState;
    },

    clearAuth: () => initialState,
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
