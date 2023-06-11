import { authReducer } from './auth.reducer';
import { availableReducer} from './available.reducer';

export const rootReducer = {
  auth: authReducer,
  available: availableReducer
};
