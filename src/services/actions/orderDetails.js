export const ORDER_NUMBER_REQUEST = "ORDER_NUMBER_REQUEST";
export const ORDER_NUMBER_SUCCESS = "ORDER_NUMBER_SUCCESS";
export const ORDER_NUMBER_FAILED = "ORDER_NUMBER_FAILED";
export const ORDER_INGREDIENT_ID = 'ORDER_INGREDIENT_ID';

const apiUrl = 'https://norma.nomoreparties.space/api/orders';


export const getOrderNumber = (ingredientsID) => {
  return function(dispatch) {
    dispatch({ type: ORDER_NUMBER_REQUEST });

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"ingredients": ingredientsID})
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
        })
        .then(res => dispatch({ type: ORDER_NUMBER_SUCCESS, orderNumber: res.order.number }))
        .catch(e => {
          dispatch({ type: ORDER_NUMBER_FAILED })
          console.log(e);
        });
    }
};
