import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import example from './example';
import report from './report';

// якщо вам потрібні якісь налаштування
// для відображення ваших даних в локал сторедж
const examplePersistConfig = {
  key: 'filter',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  // це для локал сторедж
  exampleReducer: persistReducer(examplePersistConfig, example.exampleReducer),
  // reportReducer: persistReducer(examplePersistConfig, report.reportReducer),
  reportReducer: report.reportReducer,
  // //це просто для стейта
  // exampleReducer:example.exampleReducer,
});

export default rootReducer;
