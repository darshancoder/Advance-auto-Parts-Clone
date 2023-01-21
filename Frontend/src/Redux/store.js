import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import { cartReducer } from "./cart/reducer";
import { productReducer } from "./products/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  carts: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
