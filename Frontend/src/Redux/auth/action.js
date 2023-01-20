import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
  } from "./actionTypes";
  import axios from "axios";
  
  export const authRegister = (data) => async (dispatch) => {
    try {
      dispatch({ type: AUTH_REGISTER_REQUEST });
  
      const res = await axios.post(
        "https://wild-jay-shoulder-pads.cyclic.app/user/signup",
        data
      );
      // console.log('res: ', res);
  
      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: AUTH_REGISTER_FAILURE,
        payload: {
          message: error.response.data.message,
        },
      });
    }
  };
  
  export const authLogin = (data) => async (dispatch) => {
  //   console.log("data: ", data);
    try {
      dispatch({ type: AUTH_LOGIN_REQUEST });
  
      const res = await axios.post(
        "https://wild-jay-shoulder-pads.cyclic.app/user/login",
        data
      );
      // console.log("res: ", res);
  
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          token: res.data.token,
          message: res.data.message,
          user: res.data.user,
        },
      });
    } catch (error) {
      // console.log("error: ", error);
  
      dispatch({
        type: AUTH_LOGIN_FAILURE,
        payload: {
          message: error.response.data.message,
        },
      });
    }
  };