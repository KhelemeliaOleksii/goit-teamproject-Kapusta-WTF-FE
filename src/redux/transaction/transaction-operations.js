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

const getTransaction = createAsyncThunk('transaction/getTransaction', async () => {
  try {
    const { data } = await axios.get('/api/v1/transactions');
    return data;
  } catch (error) {
    return error.message;
  }
});
const addTransaction = createAsyncThunk('transaction/addTransaction', async (transaction) => {
  try {
    const { data } = await axios.post('/api/v1/transactions', transaction);
    return data;
  } catch (error) {
    return error.message;
  }
});

const deleteTransaction = createAsyncThunk('transaction/delete', async (id) => {
  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

const transactionOperations = {
  getBalance,
  addBalance,
  getTransaction,
  addTransaction,
  deleteTransaction
};

export default transactionOperations;
