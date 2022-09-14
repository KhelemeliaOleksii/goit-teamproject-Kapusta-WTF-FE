const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.username;

const getCurrentUser = (state) => state.auth.current.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const getBalance = (state) => state.auth.user.balance;

const getAuthToken = (state) => state.auth.token;

const getReloadFrom = (state) => state.auth.reloadFrom;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getCurrentUser,
  getUserEmail,
  getIsFetchingCurrent,
  getBalance,
  getAuthToken,
  getReloadFrom,
};

export default authSelectors;
