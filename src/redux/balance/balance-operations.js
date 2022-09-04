const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

axios.defaults.baseURL = 'https://kapusta-wtf.herokuapp.com/';

const balanceRequest = createAsyncThunk('balance/request', async (credentials, thunkAPI) => {
  // Для прикладу
  // const state = thunkAPI.getState();
  // const testValue = state.example.filter;

  try {
    const { data } = await axios.post('api/v1/balance', credentials);
    return data.data.balance;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const balanceOperations = {
  balanceRequest,
};

export default balanceOperations;
