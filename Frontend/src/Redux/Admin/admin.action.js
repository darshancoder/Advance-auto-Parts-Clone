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
  DELETE_PRODUCT_SUCCESS
} from "./admin.types";

export const ACTION_GET_ADMIN = () => async (dispatch) => {
    dispatch({type:GET_ADMIN_LOADING})
    try{


    }catch(e){
        dispatch({type:GET_ADMIN_ERROR,payload:e.message})
    }

}