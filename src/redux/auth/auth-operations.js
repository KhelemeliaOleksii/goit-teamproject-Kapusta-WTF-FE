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

const register = createAsyncThunk('/users/signup', async (userData) => {
  try {
    const { data } = await axios.post('api/v1/users/signup', userData);
    token.set(data.token);
    notifier.success('Реєтрація успішна! Перевірте свою пошту щоб закінчити верифікацію.');
    return data;
  } catch (error) {
    return notifier.error(error.message);
  }
});

const logIn = createAsyncThunk('/users/login', async (userData) => {
  try {
    const { data } = await axios.post('api/v1/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return notifier.error(error.message);
  }
});

const logOut = createAsyncThunk('/users/logout', async () => {
  try {
    await axios.post('api/v1/users/logout');
    token.unset();
    return console.log('');
  } catch (error) {
    return notifier.error(error.message);
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
      return notifier.error(error.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
