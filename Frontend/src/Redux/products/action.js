import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS });
  axios
    .get("http://localhost:8080/airfilters")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, products: res.data });
      //   console.log(res.data);
    })
    .catch((err) => dispatch({ type: types.GET_PRODUCTS_ERROR }));
};
