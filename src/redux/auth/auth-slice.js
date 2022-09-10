import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleLogIn: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.error.message;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.rejected](state, action) {
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.error.message;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isFetchingCurrentUser = true;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.getBalance.fulfilled](state, action) {
      // console.log('action.payload.data', action.payload.data);
      state.user.balance = action.payload.data.balance;
    },
    [authOperations.getBalance.rejected](state, _) {
      state.user.balance = null;
    },
    [authOperations.addBalance.fulfilled](state, action) {
      state.user.balance = action.payload.data.balance;
    },
  },
});

export const { googleLogIn } = authSlice.actions;
export default authSlice.reducer;
