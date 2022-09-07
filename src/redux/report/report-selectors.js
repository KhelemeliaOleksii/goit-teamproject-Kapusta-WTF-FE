const getReportDate = (state) => state.reportReducer.date;
const getUserMount = (state) => state.reportReducer.userMount;
const getTransactionType = (state) => state.reportReducer.transaction;
const getTransactionDesc = (state) => state.reportReducer.transactionDesc;
const getActiveCategoryId = (state) => state.reportReducer.activeCategory;

const reportSelectors = {
  getReportDate,
  getUserMount,
  getTransactionType,
  getTransactionDesc,
  getActiveCategoryId,
};
export default reportSelectors;
