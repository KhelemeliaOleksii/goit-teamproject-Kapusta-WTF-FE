import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';

const initialState = {
  date: null,
  userMount: [],
  transaction: [],
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducers: {
    dateUser: (state, { payload }) => {
      state.date = payload;
    },
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    // [reportOperations.userMount.pending](state, { payload }) {},
    [reportOperations.userMount.fulfilled](state, { payload }) {
      state.userMount = payload;
    },
    // [reportOperations.userMount.rejected](state, { payload }) {},
    [reportOperations.transactionType.fulfilled](state, { payload }) {
      state.transaction = payload;
    },
  },
});

export const { dateUser } = reportSlice.actions;
export default reportSlice.reducer;
