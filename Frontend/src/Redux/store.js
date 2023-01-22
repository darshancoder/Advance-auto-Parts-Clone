import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";

import { cartReducer } from "./cart/reducer";
import productsReducer from "./products/reducer";

import { adminReducer } from "./Admin/admin.reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  carts: cartReducer,
  admin: adminReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
