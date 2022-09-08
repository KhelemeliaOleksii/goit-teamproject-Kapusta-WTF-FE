import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';

const initialState = {
  date: null,
  userMount: [],
  transaction: [],
  transactionDesc: [],
  activeCategory: '',
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    dateUser: (state, { payload }) => {
      state.date = payload;
    },
    toggleActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
  },
  extraReducers: {
    [reportOperations.userMount.fulfilled](state, { payload }) {
      state.userMount = payload;
    },
    [reportOperations.transactionDesc.fulfilled](state, { payload }) {
      state.transactionDesc = payload;
    },
    [reportOperations.transactionType.fulfilled](state, { payload }) {
      state.transaction = payload;
    },
  },
});

export const { dateUser, toggleActiveCategory } = reportSlice.actions;
export default reportSlice.reducer;
