import * as actions from "./actionTypes";
import axios from "axios";

export const getAllProducts = (page) => async (dispatch) => {
  dispatch({ type: actions.GET_ALL_PRODUCTS_LOADING });

  try {
    let response = await axios.get(
      `http://localhost:8080/airfilters?_page=${page}&_limit=10`
    );
    dispatch({ type: actions.GET_ALL_PRODUCTS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: actions.GET_ALL_PRODUCTS_FAILED, payload: error.message });
    console.log(error.message);
  }
};
export const sortByPriceAsc = () => (dispatch, getState) => {
  const { product } = getState();
  console.log(getState());
  dispatch({ type: actions.SORT_BY_PRICE_ASC, payload: product.data });
};

export const sortByPriceDesc = () => (dispatch, getState) => {
  const { product } = getState();
  dispatch({ type: actions.SORT_BY_PRICE_DESC, payload: product.data });
};
export const sortByBrandAsc = () => (dispatch, getState) => {
  const { product } = getState();
  dispatch({ type: actions.SORT_BY_BRAND_ASC, payload: product.data });
};

export const sortByBrandDesc = () => (dispatch, getState) => {
  const { product } = getState();
  dispatch({ type: actions.SORT_BY_BRAND_DESC, payload: product.data });
};
export const sortByMostPopular = () => (dispatch, getState) => {
  const { product } = getState();
  dispatch({ type: actions.SORT_BY_MOST_POPULAR, payload: product.data });
};
export const sortByTopRated = () => (dispatch, getState) => {
  const { product } = getState();
  dispatch({ type: actions.SORT_BY_BRAND_TOP_RATED, payload: product.data });
};
