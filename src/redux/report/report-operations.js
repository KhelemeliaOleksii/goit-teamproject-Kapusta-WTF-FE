const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

axios.defaults.baseURL = 'https://kapusta-wtf.herokuapp.com/';

console.log(axios.defaults.baseURL);

const userMount = createAsyncThunk(
  'report/userMount',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `api/v1/report/short-per-month?date=${date}`
      );
      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const transactionType = createAsyncThunk(
  'report/transactionType',
  async (date, { rejectWithValue }) => {
    const { normalizedDate, type } = date;
    try {
      const { data } = await axios.get(
        `api/v1/report/category-per-month?date=${normalizedDate}&transactionType=${type}`
      );
      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reportOperations = {
  userMount,
  transactionType,
};

export default reportOperations;
