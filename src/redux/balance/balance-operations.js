const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

axios.defaults.baseURL = 'https://kapusta-wtf.herokuapp.com/';

const getBalance = createAsyncThunk('balance/getBalance', async () => {
  try {
    const { data } = await axios.get('/api/v1/balance');
    return data;
  } catch (error) {
    return error.message;
  }
});

const addBalance = createAsyncThunk('balance/addBalance', async (balance) => {
  try {
    const { data } = await axios.post('/api/v1/balance', balance);
    return data;
  } catch (error) {
    return error.message;
  }
});
const balanceOperations = {
  getBalance,
  addBalance
};

export default balanceOperations;
