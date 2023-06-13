import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

export const rootReducer = {
  auth: authReducer,
  available: availableReducer
};