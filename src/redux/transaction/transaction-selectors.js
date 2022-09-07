const getType = (state) => state.transaction.type;
const getTransactionList = (state) => state.transaction.transactionList;
const getDate = (state) => state.transaction.date;

const transactionSelectors = {
  getType,
  getTransactionList,
  getDate,
};

export default transactionSelectors;
