import { GET_DETAIL_CAR } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const detailReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_DETAIL_CAR}_LOADING`:
      return {
        ...state,
      };
    case `${GET_DETAIL_CAR}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_DETAIL_CAR}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;