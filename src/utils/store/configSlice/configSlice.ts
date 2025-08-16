import { createSlice } from '@reduxjs/toolkit';

import { CONFIG_SLICE } from '@DevEx/constants/sliceConstant';

const initialState = {
  show_maintenance_mode: false,
  query_retry_times: 1,
  cache_persist_offline: false,
  cache_default_stale_time: 300000,
  cache_default_cache_time: 600000,
};

const configSlice = createSlice({
  name: CONFIG_SLICE,
  initialState: initialState,
  reducers: {
    setConfig: (state, action) => {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    },
    resetConfig: () => {
      return { ...initialState };
    },
  },
});

export const { setConfig } = configSlice.actions;

export default configSlice.reducer;
