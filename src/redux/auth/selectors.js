export const selectUserName = (state) => state.auth.user.name;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectError = (state) => state.auth.error;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
