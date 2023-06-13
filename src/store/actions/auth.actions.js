export const loginAction = (payload) => ({
  type: 'auth/login',
  payload,
});

export const logoutAction = {
  type: 'auth/logout',
};
