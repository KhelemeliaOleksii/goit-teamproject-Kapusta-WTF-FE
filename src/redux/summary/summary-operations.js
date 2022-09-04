const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const getTransactionPerMouth = createAsyncThunk('transaction/getTransactionPerMouth', async (type) => {
  try {
    const { data } = await axios.get(`/api/v1/report/short?transactionType=${type}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

const summaryOperations = {
  getTransactionPerMouth,
};

export default summaryOperations;
