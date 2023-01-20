import * as actions from "./actionTypes";

const initialState = {
  data: [],
  page: 1,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case actions.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SORT_BY_PRICE_ASC:
      const sortAsc = action.payload.sort((a, b) =>
        a.price < b.price ? -1 : a.price > b.price ? 1 : 0
      );
      return {
        ...state,
        data: sortAsc,
      };
    case actions.SORT_BY_PRICE_DESC:
      const sortDesc = action.payload.sort((a, b) =>
        a.price < b.price ? 1 : a.price > b.price ? -1 : 0
      );
      return {
        ...state,
        data: sortDesc,
      };
    case actions.SORT_BY_BRAND_ASC:
      const sortBrandAsc = action.payload.sort((a, b) =>
        a.brand < b.brand ? -1 : a.brand > b.brand ? 1 : 0
      );
      return {
        ...state,
        data: sortBrandAsc,
      };
    case actions.SORT_BY_BRAND_DESC:
      const sortBrandDesc = action.payload.sort((a, b) =>
        a.brand < b.brand ? 1 : a.brand > b.brand ? -1 : 0
      );
      return {
        ...state,
        data: sortBrandDesc,
      };
    case actions.SORT_BY_MOST_POPULAR:
      const sortMostPopular = action.payload.sort((a, b) =>
        a.reviews < b.reviews ? 1 : a.reviews > b.reviews ? -1 : 0
      );
      return {
        ...state,
        data: sortMostPopular,
      };
    case actions.SORT_BY_BRAND_TOP_RATED:
      const sortTopRated = action.payload.sort((a, b) =>
        a.stars < b.stars ? 1 : a.stars > b.stars ? -1 : 0
      );
      return {
        ...state,
        data: sortTopRated,
      };

    default:
      return state;
  }
};
