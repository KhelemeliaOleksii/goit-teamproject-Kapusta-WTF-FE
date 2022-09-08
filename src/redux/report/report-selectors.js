/* eslint-disable implicit-arrow-linebreak */
const getReportDate = (state) => state.reportReducer.date;
const getUserMount = (state) => state.reportReducer.userMount;
const getTransactionType = (state) =>
  state.reportReducer.transaction.transaction;
const getTransactionDesc = (state) =>
  state.reportReducer.transaction.transactionDesc;
const getActiveCategoryId = (state) => state.reportReducer.activeCategory;

const reportSelectors = {
  getReportDate,
  getUserMount,
  getTransactionType,
  getTransactionDesc,
  getActiveCategoryId,
};
export default reportSelectors;
