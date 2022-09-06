import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = {
  balance: '',
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducer: {
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [balanceOperations.getBalance.fulfilled](state, action) {
      state.balance = action.payload.data.balance;
    },
    [balanceOperations.getBalance.rejected](state, _) {
      state.balance = '';
    },
    [balanceOperations.addBalance.fulfilled](state, action) {
      state.balance = action.payload.data.balance;
    },
  }
});

export default balanceSlice.reducer;
