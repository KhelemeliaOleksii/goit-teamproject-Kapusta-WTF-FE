import transactionOperations from './transaction-operations';
import transactionReducer from './transaction-slice';
import transactionSelectors from './transaction-selectors';

const transaction = {
  transactionReducer,
  transactionSelectors,
  transactionOperations
};

export default transaction;
