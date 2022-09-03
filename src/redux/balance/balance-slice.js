import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = {
  balance: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducer: {
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [balanceOperations.balanceRequest.fulfilled](state, action) {
      state.example = action.payload;
    },
    [balanceOperations.balanceRequest.rejected](state, _) {
      state.example = [];
    },
    // [exampleOperations.testRequest.pending](state, action) {
    //     //крутиться якийсь лоадер
    // }
  }
});

export default balanceSlice.reducer;
