import axios from "axios";
import { getAllProducts } from "../products/action";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
} from "./admin.types";

// GET
export const ACTION_GET_ADMIN = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADING });
  try {
    let res1 = await axios.get(
      "https://wild-jay-shoulder-pads.cyclic.app/cart"
    );
    let res2 = await axios.get(
      "https://wild-jay-shoulder-pads.cyclic.app/user"
    );

    let data = { cart: res1.data, users: res2.data };
    console.log(data);
    return dispatch({ type: GET_ADMIN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ADMIN_ERROR, payload: e.message });
  }
};

//DELETE
export const ACTION_DELETE_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_LOADING });

    try {
      await axios.delete(
        `https://wild-jay-shoulder-pads.cyclic.app/${payload.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: payload.id,
            value: payload.value,
            name: payload.name,
          },
        }
      );
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      console.log("Im Here form Deeleted Product");
    } catch (e) {
      dispatch({ type: DELETE_PRODUCT_ERROR, payload: e.message });
    }
  };


// ADD
export const ACTION_ADD_PRODUCT =(payload= {}) => async (dispatch) => {
  dispatch({type:ADD_PRODUCT_LOADING})
  try{
    await axios.post(`https://wild-jay-shoulder-pads.cyclic.app/${payload.value}`,{
      headers:{
        "Content-Type":"application/json",
      },
      data:{
        area:payload.area
      },
    })
    return dispatch({type:ADD_PRODUCT_SUCCESS})

  }catch(e){
    dispatch({ type: ADD_PRODUCT_ERROR, payload: e.message });
  }
}