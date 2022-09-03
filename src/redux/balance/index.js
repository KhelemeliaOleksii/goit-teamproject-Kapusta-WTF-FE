import balanceOperations from './balance-operations';
import balanceReducer from './balance-slice';
import balanceSelectors from './balance-selectors';

const balanceSlice = {
  balanceOperations,
  balanceReducer,
  balanceSelectors
};

export default balanceSlice;
