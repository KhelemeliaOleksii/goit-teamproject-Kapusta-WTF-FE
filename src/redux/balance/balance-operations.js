const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const balanceRequest = createAsyncThunk('balance/request', async (credentials, thunkAPI) => {
  // Для прикладу
  // const state = thunkAPI.getState();
  // const testValue = state.example.filter;

  try {
    const { data } = await axios.post('/balance', credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const balanceOperations = {
  balanceRequest,
};

export default balanceOperations;
