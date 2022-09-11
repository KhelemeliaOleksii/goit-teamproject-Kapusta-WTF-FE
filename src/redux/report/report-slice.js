import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';
import categoriesFilter from './categories.json';

const initialState = {
  date: null,
  userMount: [],
  transaction: { transaction: [], transactionDesc: [] },
  activeCategory: null,
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
    reset: () => initialState,
  },
  extraReducers: {
    [reportOperations.userMount.fulfilled](state, { payload }) {
      state.userMount = payload;
    },
    [reportOperations.transactionType.fulfilled](state, { payload }) {
      const dataItems = payload.map((item) => {
        const { _id: itemId } = item;
        const category = categoriesFilter.find(
          ({ _id: filterId }) => filterId.$oid === itemId
        );
        return { ...category, ...item };
      });
      state.transaction.transaction = dataItems;
      const { _id } = dataItems[0];
      state.activeCategory = _id;
    },
    [reportOperations.transactionDesc.fulfilled](state, { payload }) {
      state.transaction.transactionDesc = payload;
    },
  },
});

export const { dateUser, toggleActiveCategory, reset } = reportSlice.actions;
export default reportSlice.reducer;
