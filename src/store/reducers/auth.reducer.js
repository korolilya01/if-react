const INITIAL_STATE = null;
export const authReducer = (state = INITIAL_STATE, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case 'auth/login':
      return action.payload;
    case 'auth/logout':
      return INITIAL_STATE;
    default:
      return newState;
  }
};
