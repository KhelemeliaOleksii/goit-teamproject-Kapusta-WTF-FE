const getType = (state) => state.transaction.type;
const getTransactionList = (state) => state.transaction.transactionList;
const getDate = (state) => state.transaction.date;
const getLoading = (state) => state.transaction.isLoading;

const transactionSelectors = {
  getType,
  getTransactionList,
  getDate,
  getLoading
};

export default transactionSelectors;
