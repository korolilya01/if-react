const INITIAL_STATE = {
  hotels: [],
};
export const availableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'available/search':
      return {
        ...state,
        hotels: action.payload,
      };
    default:
      return state;
  }
};
