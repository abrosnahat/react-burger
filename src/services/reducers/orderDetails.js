import {
  ORDER_NUMBER_REQUEST,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_FAILED,
  ORDER_INGREDIENT_ID
} from '../actions/orderDetails';

const initialsState = {
    ingredientsID: [],
    orderNumber: null,
    isLoading: false,
    hasError: false,
}

export const orderDetailsReducer = (state = initialsState, { type, ingredientsID, orderNumber }) => {
    switch (type) {
      case ORDER_NUMBER_REQUEST: {
        return {
          ...state,
          isLoading: true
        }
      }
      case ORDER_NUMBER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          orderNumber: orderNumber,
        }
      }
      case ORDER_NUMBER_FAILED: {
        return {
          ...state,
          isLoading: false,
          hasError: true,
        }
      }
      case ORDER_INGREDIENT_ID: {
        return {
          ...state,
          ingredientsID: ingredientsID
        }
      }
      default: {
        return state;
      }
    }
  }