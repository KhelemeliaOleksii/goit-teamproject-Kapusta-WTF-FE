const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const userMount = createAsyncThunk(
  'report/userMount',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'http://localhost:5000/api/v1/report/short-per-month?date=2022-09-02'
      );
      return data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reportOperations = {
  userMount,
};

export default reportOperations;
