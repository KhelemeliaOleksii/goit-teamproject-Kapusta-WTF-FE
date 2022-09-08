/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';
import categoriesFilter from './categories.json';

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
      console.log(payload);
      const dataItem = payload.map((item) => {
        const category = categoriesFilter.find(
          (filter) => filter._id.$oid === item._id
        );
        return { ...category, ...item, isActive: false };
      });
      state.transaction.transaction = dataItem;
    },
    [reportOperations.transactionDesc.fulfilled](state, { payload }) {
      state.transaction.transactionDesc = payload;
    },
  },
});

export const { dateUser } = reportSlice.actions;
export default reportSlice.reducer;
