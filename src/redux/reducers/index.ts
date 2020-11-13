import { combineReducers } from 'redux';
import { UserReducer } from '../reducers/userReducer';
import { ShoppingReducer } from '../reducers/shoppingReducer';

export const rootReducer = combineReducers({
  useReducer: UserReducer,
  shoppingReducer: ShoppingReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
