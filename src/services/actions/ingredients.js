export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngredients = () => {
  return function(dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(res => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data }))
      .catch(e => {
        dispatch({
          type: GET_INGREDIENTS_ERROR
        });
        console.log(e);
      });
  }
  
};