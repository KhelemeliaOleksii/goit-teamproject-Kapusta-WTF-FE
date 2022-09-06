const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

axios.defaults.baseURL = 'https://kapusta-wtf.herokuapp.com/';

const getTransaction = createAsyncThunk('transaction/getTransaction', async (date) => {
  try {
    const { data } = await axios.get(`api/v1/report/all-in-day?date=${date}`);
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
  getTransaction,
  addTransaction,
  deleteTransaction,
};

export default transactionOperations;
