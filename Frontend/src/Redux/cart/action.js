import * as types from "./actionTypes";
import axios from "axios";

// get function -
export const getBagData = () => (dispatch) => {
  dispatch({ type: types.GET_BAG_REQUEST });
  return axios
    .get("http://localhost:8080/bag")
    .then((res) => {
      dispatch({ type: types.GET_BAG_SUCCESS, payload: res.data });
      // console.log(res.data)
    })
    .catch((err) => dispatch({ type: types.GET_BAG_ERROR }));
};

// delete bag function -
export const deleteBagData = (id) => (dispatch) => {
  // console.log(id)
  dispatch({ type: types.DELETE_BAG_REQUEST });
  return axios
    .delete(`http://localhost:8080/bag/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_BAG_SUCCESS, payload: res.data });
    })

    .catch((err) => dispatch({ type: types.DELETE_BAG_ERROR }));
};

export const addProductData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post(`http://localhost:8080/bag`, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data });
      // console.log(res.data)
    })
    .catch((err) => dispatch({ type: types.ADD_PRODUCT_ERROR }));
};
