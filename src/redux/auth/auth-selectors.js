const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.username;

const getCurrentUser = (state) => state.auth.current.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const getAuthToken = (state) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getCurrentUser,
  getUserEmail,
  getIsFetchingCurrent,
  getAuthToken
};

export default authSelectors;
