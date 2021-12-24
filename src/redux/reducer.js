import * as types from "./actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: null,
  product: [],
  shoppingCart: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SIGNUP_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return {
        product: action.payload
      };
    default:
      return state;
  }
};

export const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TOTAL:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case types.ADD_SUBTOTAL:
      return {
        ...state,
        shoppingCart: action.payload,
      };
    default:
      return state;
  }
};
