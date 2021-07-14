import {
  VISIBLE_ORDER_DETAILS,
  VISIBLE_INGREDIENT_DATAILS
} from '../actions/modals';

const initialsState = {
  visibleOrderDetails: false,
  visibleIngredientDetails: false
}

export const modalsReducer = (state = initialsState, { type, value }) => {
  switch (type) {
    case VISIBLE_ORDER_DETAILS: {
      return {
        ...state,
        visibleOrderDetails: value
      }
    }
    case VISIBLE_INGREDIENT_DATAILS: {
      return {
        ...state,
        visibleIngredientDetails: value
      }
    }
    default: {
      return state;
    }
  }
}