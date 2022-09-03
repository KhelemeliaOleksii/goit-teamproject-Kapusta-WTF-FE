const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getCurrentUser = (state) => state.auth.current.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getCurrentUser,
  getUserEmail,
  getIsFetchingCurrent,
};

export default authSelectors;
