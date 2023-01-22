import axios from "axios";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionTypes";

export const getAllProducts = (query) => async (dispatch) => {

  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    let q = "";
    for (let key in query) {
      q += `${key}=${query[key]}&`;
    }
    
    const res = await axios.get(`https://wild-jay-shoulder-pads.cyclic.app/product?${q}`);
  

    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });

    const res = await axios.get(
      `https://wild-jay-shoulder-pads.cyclic.app/product/${id}`
    );
    

    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data.product });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT_FAILURE,
    });
  }
};

export const addProduct = (data) => async (dispatch) => {
 
  
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    const res = await fetch("https://wild-jay-shoulder-pads.cyclic.app/product", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    let data1 = await res.json();
    

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data1 });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAILURE,
    });
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    await fetch(`https://wild-jay-shoulder-pads.cyclic.app/product/${id}`, {
      body: JSON.stringify(data),
      method: "PUT",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    

    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    await fetch(`https://wild-jay-shoulder-pads.cyclic.app/product/${id}`, {
      method: "DELETE",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
    });
  }
};