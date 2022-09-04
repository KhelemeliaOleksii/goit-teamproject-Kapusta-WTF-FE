const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const userMount = createAsyncThunk(
  'report/userMount',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/report/short-per-month?date=${date}`
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
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/report/category-per-month?date=${date}&transactionType=expenses`
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
