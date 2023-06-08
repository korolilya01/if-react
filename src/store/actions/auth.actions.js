export const loginAction = ({ email, password }) => ({
  type: 'auth/login',
  payload: { email: email, password: password },
});

export const logoutAction = {
  type: 'auth/logout',
};
