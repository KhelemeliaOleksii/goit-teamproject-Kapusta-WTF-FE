import axios from '../../api/axios/axiosConfig';

const { createAsyncThunk } = require('@reduxjs/toolkit');

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
const transactionDesc = createAsyncThunk(
  'report/transactionDesc',
  async (date, { rejectWithValue }) => {
    const { normalizedDate, categoryId } = date;
    try {
      const { data } = await axios.get(
        `api/v1/report/by-name-per-month?date=${normalizedDate}&category=${categoryId}`
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
  transactionDesc,
};

export default reportOperations;
