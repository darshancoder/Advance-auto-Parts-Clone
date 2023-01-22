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

const initialState = {
  AllProducts: { loading: false, error: false },
  Product: { loading: false, error: false },
  AddProduct: { loading: false, error: false },
  UpdateProduct: { loading: false, error: false },
  DeleteProduct: { loading: false, error: false },
  data: [],
  singleData: {},
};

export default function productsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        AllProducts: { loading: true, error: false },
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        AllProducts: { loading: false, error: false },
        data: payload.products,
      };

    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        AllProducts: { loading: false, error: true },
      };

    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        Product: { loading: true, error: false },
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        Product: {
          loading: false,
          error: false,
        },
        singleData: payload,
      };

    case GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        Product: { loading: false, error: true },
      };

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        AddProduct: { loading: true, error: false },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        AddProduct: { loading: false, error: false },
        data: [...state.data, payload],
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        AddProduct: { loading: false, error: true },
      };

    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        UpdateProduct: { loading: true, error: false },
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        UpdateProduct: { loading: false, error: false },
        data: state.data.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };

    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        UpdateProduct: { loading: false, error: true },
      };

    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        DeleteProduct: { loading: true, error: false },
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        DeleteProduct: { loading: false, error: false },
        data: state.data.filter((item) => item._id !== payload),
      };

    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        DeleteProduct: { loading: false, error: true },
      };

    default:
      return state;
  }
}