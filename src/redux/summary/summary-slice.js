import { createSlice } from '@reduxjs/toolkit';
import summaryOperations from './summary-operations';

const initialState = {
  SummaryList: [],
};

const SummarySlice = createSlice({
  name: 'summary',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducers: {
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [summaryOperations.getTransactionPerMouth.fulfilled](state, action) {
      state.SummaryList = [...action.payload.data.result];
    },
    [summaryOperations.getTransactionPerMouth.rejected](state, _) {
      state.SummaryList = [];
    },
    // [exampleOperations.testRequest.pending](state, action) {
    //     //крутиться якийсь лоадер
    // }
  }
});

export default SummarySlice;
