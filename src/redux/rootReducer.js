import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import example from './example';
import authReducer from './auth/auth-slice';

// якщо вам потрібні якісь налаштування
// для відображення ваших даних в локал сторедж
const examplePersistConfig = {
  key: 'filter',
  storage,
  blacklist: ['filter'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  // це для локал сторедж
  exampleReducer: persistReducer(examplePersistConfig, example.exampleReducer),
  // //це просто для стейта
  // exampleReducer:example.exampleReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
