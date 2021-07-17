import {
  ADD_CART_INGREDIENT,
	DELETE_CART_INGREDIENT,
  ADD_CART_INGREDIENT_BUN,
  MOVE_CART_INGREDIENT,
  CLEAR_CART_INGREDIENT
} from '../actions/cart';

import update from 'immutability-helper';  


const initialsState = {
  сartIngredients: [],
  bunIngredients: []
}

export const cartReducer = (state = initialsState, { type, ingredients, dropIndex }) => {
  switch (type) {
    case ADD_CART_INGREDIENT: {
      return {
        ...state,
				сartIngredients: [...state.сartIngredients, ingredients]
      };
    }
    case DELETE_CART_INGREDIENT: {
      return {
        ...state,
				сartIngredients: state.сartIngredients.filter((item, index) => index !== ingredients)
      };
    }
    case MOVE_CART_INGREDIENT: {
      return {
        ...state,
        сartIngredients: update(state.сartIngredients, {
          $splice: [
              [ingredients.index, 1],
              [dropIndex, 0, ingredients.item],
          ],
        })
      };
    }
    case ADD_CART_INGREDIENT_BUN: {
      return {
        ...state,
				bunIngredients: [ingredients]
      };
    }
    case CLEAR_CART_INGREDIENT: {
      return {
        сartIngredients: [],
        bunIngredients: []
      }
    }
    default: {
      return state;
    }
  }
}