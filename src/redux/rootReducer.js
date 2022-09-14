import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import report from './report';
import authReducer from './auth/auth-slice';
import transactionSlice from './transaction/transaction-slice';
import summarySlice from './summary/summary-slice';

// якщо вам потрібні якісь налаштування
// для відображення ваших даних в локал сторедж

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'reloadFrom'],
};
const transactionPersistConfig = {
  key: 'transaction',
  storage,
  whitelist: ['date', 'type']
};

const reportPersistConfig = {
  key: 'report',
  storage,
  whitelist: ['date'],
};

const rootReducer = combineReducers({
  // це для локал сторедж
  reportReducer: persistReducer(reportPersistConfig, report.reportReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  transaction: persistReducer(transactionPersistConfig, transactionSlice.reducer),
  // //це просто для стейта
  summary: summarySlice.reducer,
});

export default rootReducer;
