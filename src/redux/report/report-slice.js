import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';

const initialState = {
  date: null,
  userMount: [],
  transaction: { transaction: [], transactionDesc: [] },
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    dateUser: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: {
    [reportOperations.userMount.fulfilled](state, { payload }) {
      state.userMount = payload;
    },
    [reportOperations.transactionType.fulfilled](state, { payload }) {
      state.transaction.transaction = payload;
    },
    [reportOperations.transactionDesc.fulfilled](state, { payload }) {
      state.transaction.transactionDesc = payload;
    },
  },
});

export const { dateUser } = reportSlice.actions;
export default reportSlice.reducer;
