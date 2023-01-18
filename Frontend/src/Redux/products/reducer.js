import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  products: {},
  isError: false,
};

export const productsReducer = (state = initialState, action) => {
  const { type, products } = action;

  switch (type) {
    case types.GET_PRODUCTS:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products };
    case types.GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};
