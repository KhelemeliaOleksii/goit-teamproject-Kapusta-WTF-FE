import summaryOperations from './summary-operations';
import summaryReducer from './summary-slice';
import summarySelectors from './summary-selectors';

const balanceSlice = {
  summaryOperations,
  summaryReducer,
  summarySelectors
};

export default balanceSlice;
