const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const testRequest = createAsyncThunk('test/request', async (credentials, thunkAPI) => {
  // Для прикладу
  // const state = thunkAPI.getState();
  // const testValue = state.example.filter;

  try {
    const { data } = await axios.get('/test');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const exampleOperations = {
  testRequest,
};

export default exampleOperations;
