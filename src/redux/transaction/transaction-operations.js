const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const testRequest = createAsyncThunk('test/request', async (credentials, thunkAPI) => {
  // Для прикладу
  // const state = thunkAPI.getState();
  // const testValue = state.example.filter;

  try {
    const { data } = await axios.get('/test');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// const date = (state, action) => {
//   state.date = action.payload;
// };
// const balence = (state, action) => {
//   state.balence = action.payload;
// };
// const type = (state, action) => {
//   state.type = action.payload;
// };
// const transactionList = (state, action) => {
//   state.transactionList = [...action.payload];
// };

// const transactionOperations = {
//   date,
//   balence,
//   type,
//   transactionList
// };

export default testRequest;
