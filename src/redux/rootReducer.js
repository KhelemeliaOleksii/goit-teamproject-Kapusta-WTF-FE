import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import example from './example';
import report from './report';

import authReducer from './auth/auth-slice';
import transactionSlice from './transaction/transaction-slice';

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
const transactionPersistConfig = {
  key: 'transaction',
  storage,
};

const rootReducer = combineReducers({
  // це для локал сторедж
  exampleReducer: persistReducer(examplePersistConfig, example.exampleReducer),
  // reportReducer: persistReducer(examplePersistConfig, report.reportReducer),
  reportReducer: report.reportReducer,
  // //це просто для стейта
  // exampleReducer:example.exampleReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  transaction: persistReducer(
    transactionPersistConfig,
    transactionSlice.reducer
  ),
});

export default rootReducer;
