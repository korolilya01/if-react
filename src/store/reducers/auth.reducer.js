const INITIAL_STATE = {
  email: null,
  password: null,
};
export const authReducer = (state = INITIAL_STATE, action) => {
  const newState = structuredClone(state);
  switch (action.type) {
    case 'auth/login': {
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case 'auth/logout': {
      return INITIAL_STATE;
    }
    default: {
      return newState;
    }
  }
};
