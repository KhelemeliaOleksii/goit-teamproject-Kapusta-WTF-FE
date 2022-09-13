import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import transactionOperations from './transaction-operations';

const initialState = {
  date: {
    year: '',
    month: '',
    day: '',
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
    changeMonth: (state, { payload }) => {
      state.date.month = payload;
    },
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [transactionOperations.addTransaction.fulfilled](state, action) {
      toast.success('Операцiя  успiшна', { theme: 'light' });
    },
    [transactionOperations.getTransaction.fulfilled](state, action) {
      state.transactionList = [...action.payload.data.result];
    },
    [transactionOperations.getTransaction.fulfilled](state, action) {
      state.transactionList = [...action.payload.data.result];
    },
    [transactionOperations.deleteTransaction.fulfilled](state, action) {
      state.transactionList = state.transactionList.filter(
        ({ id }) => id !== action.payload
      );
      toast.success('Операцiя успiшна', { theme: 'light' });
    },
    [transactionOperations.deleteTransaction.rejected](state, action) {
      toast.success('Транзакція не може бути видалена', { theme: 'dark' });
    },
  },
});

export default transactionSlice;
