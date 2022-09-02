import { createSlice } from '@reduxjs/toolkit';
import exampleOperations from './example-operations';

const initialState = {
  filter: '',
  examples: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  // для синхронних операцій, тобто робота тільки зі стейтом
  reducer: {
    filter: (state, action) => {
      state.filter = action.payload;
    }
  },
  // для асинхронних операцій, передбачає запитит до бази даних
  extraReducers: {
    [exampleOperations.testRequest.fulfilled](state, action) {
      state.example = action.payload;
    },
    [exampleOperations.testRequest.rejected](state, _) {
      state.example = [];
    },
    // [exampleOperations.testRequest.pending](state, action) {
    //     //крутиться якийсь лоадер
    // }
  }
});

export default exampleSlice.reducer;
