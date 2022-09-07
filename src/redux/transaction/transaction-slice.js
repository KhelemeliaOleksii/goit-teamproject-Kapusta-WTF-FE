import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transaction-operations';

const initialState = {
  date: {
    year: '',
    month: '',
    day: ''
  },
  type: 'expenses',
  transactionList: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [transactionOperations.getTransaction.fulfilled](state, action) {
      state.transactionList = [...action.payload.data.result];
    },
    [transactionOperations.deleteTransaction.fulfilled](state, action) {
      state.transactionList = state.transactionList.filter(({ id }) => id !== action.payload);
    },
  }
});

export default transactionSlice;
