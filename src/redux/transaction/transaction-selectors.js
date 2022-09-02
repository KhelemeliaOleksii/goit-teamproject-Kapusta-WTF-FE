const getBalance = (state) => state.transaction.balance;
const getType = (state) => state.transaction.type;
const getTransactionList = (state) => state.transaction.transactionList;
const getDate = (state) => state.transaction.date;

const transactionSelectors = {
  getBalance,
  getType,
  getTransactionList,
  getDate
};

export default transactionSelectors;
