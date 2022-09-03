import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';

const initialState = {
  date: Date.now(),
  userMount: [],
};

const reportSlice = createSlice({
  name: 'example',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducer: {},
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    // [reportOperations.userMount.pending](state, { payload }) {},
    [reportOperations.userMount.fulfilled](state, { payload }) {
      state.userMount = payload;
    },
    // [reportOperations.userMount.rejected](state, { payload }) {},
  },
});

export default reportSlice.reducer;
