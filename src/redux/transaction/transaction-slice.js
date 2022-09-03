import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transaction-operations';

const initialState = {
  date: '',
  balance: '',
  type: 'expenses',
  transactionList: []
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },
    addBalence: (state, action) => {
      state.balance = action.payload;
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
    addTransactionList: (state, action) => {
      state.transactionList = [...action.payload];
    }
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [transactionOperations.getBalance.fulfilled](state, action) {
      state.balance = action.payload.data.balance;
    },
    [transactionOperations.getBalance.rejected](state, _) {
      state.balence = '';
    },
    // [exampleOperations.testRequest.pending](state, action) {
    //     //крутиться якийсь лоадер
    // }
    [transactionOperations.getTransaction.fulfilled](state, action) {
      // state.addTransactionList = [...action.payload.data.balance];
    },
  }
});

export default transactionSlice;
