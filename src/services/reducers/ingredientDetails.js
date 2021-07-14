import { SET_ACTIVE_INGREDIETN } from '../actions/ingredientDetails';

const initialsState = {
    activeIngredient: {},
}

export const ingredientDetailsReducer = (state = initialsState, { type, activeIngredient }) => {
    switch (type) {
      case SET_ACTIVE_INGREDIETN: {
        return {
          ...state,
          activeIngredient: activeIngredient
        }
      }
      default: {
        return state;
      }
    }
  }