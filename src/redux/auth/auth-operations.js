import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import notifier from '../../services/notify';

const token = {
  set(tokenAuth) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('/users/signup', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('api/v1/users/signup', userData);
    notifier.success('Реєтрація успішна! Перевірте свою пошту щоб закінчити верифікацію.');
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      notifier.error('Ця електронна пошта вже використовується');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logIn = createAsyncThunk('/users/login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('api/v1/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      notifier.error('Електронна пошта не зареєстровна або пароль не вірний');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.get('api/v1/users/logout');
    token.unset();
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/users/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/v1/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const getBalance = createAsyncThunk('balance/getBalance', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/api/v1/balance');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addBalance = createAsyncThunk('balance/addBalance', async (balance, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/v1/balance', balance);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  getBalance,
  addBalance,
};

export default operations;
