import {createSlice} from '@reduxjs/toolkit';

import {USER_SLICE} from '@DevEx/constants/sliceConstant';
import {TUserInfo} from '@DevEx/utils/types/types';

type TInitialState = {
  isAuthenticated: boolean;
  actions: string[] | null;
  isDarkMode: boolean;
  isFirstVisit: boolean;
  user: TUserInfo;
  searchHistory: Array<string>;
};

// const initialState: TInitialState = {
//   isAuthenticated: false,
//   actions: null,
//   isDarkMode: false,
//   isFirstVisit: false,
//   user: {
//     id: 0,
//     username: 'HainesR11',
//     name: 'Rhys Haines',
//     profilePic: '1234.png',
//     email: 'Rhys.haines@gmail.com',
//     following: [
//       {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 2, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 3, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 4, Name: 'Jim Lawson', profilePic: '12345.png'},
//     ],
//     followers: [
//       {id: 1, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 2, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 3, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 4, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 5, Name: 'Jim Lawson', profilePic: '12345.png'},
//       {id: 6, Name: 'Jim Lawson', profilePic: '12345.png'},
//     ],
//   },
// };

const initialState: TInitialState = {
  isAuthenticated: false,
  actions: null,
  isDarkMode: false,
  isFirstVisit: false,
  user: {
    id: 0,
    username: '',
    name: '',
    profilePic: '',
    email: '',
    following: [],
    followers: [],
  },
  searchHistory: ['search1', 'search2', 'search3', 'search4'],
};

const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    setUser: (state, action) => {
      const nextState = {
        ...state,
        ...action.payload,
        isFirstVisit: false,
      };
      return nextState;
    },

    clearUser: () => {
      return {
        ...initialState,
        isFirstVisit: false,
      };
    },

    resetUser: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {setUser, clearUser, resetUser} = userSlice.actions;

export default userSlice.reducer;
