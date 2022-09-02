import { createSlice } from '@reduxjs/toolkit';
// import exampleOperations from './transaction-operations';

const initialState = {
  date: new Date().toString(),
  balence: '',
  type: 'expenses',
  transactionList: []
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducer: {

    date: (state, action) => {
      state.date = action.payload;
    },
    balence: (state, action) => {
      state.balence = action.payload;
    },
    type: (state, action) => {
      state.type = action.payload;
    },
    transactionList: (state, action) => {
      state.transactionList = [...action.payload];
    }
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  // extraReducers: {
  //   [exampleOperations.testRequest.fulfilled](state, action) {
  //     state.example = action.payload;
  //   },
  //   [exampleOperations.testRequest.rejected](state, _) {
  //     state.example = [];
  //   },
  //   // [exampleOperations.testRequest.pending](state, action) {
  //   //     //крутиться якийсь лоадер
  //   // }
  // }
});
export const transaction = {
  reducer: transactionSlice.reducer,
  actions: transactionSlice.actions
};

export default transactionSlice.reducer;
