import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css';
import done from '../../images/done.png';

const OrderDetails = ({ ingredientsID }) => {
  const apiUrl = 'https://norma.nomoreparties.space/api/orders';

  const [orderNumber, setOrderNumber] = React.useState(null);

  const getOrderNumber = () => {
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
      .then(data => setOrderNumber(data.order.number))
      .catch(e => console.log(e));
  };

  React.useEffect(() => {
    getOrderNumber();
    // eslint-disable-next-line
  }, [])

  return (
      <>
        <p className={`${ styles.id } text text_type_digits-large`}>{orderNumber}</p>
        <p className={`${ styles.text } text text_type_main-medium`}>
          идентификатор заказа
        </p>
        <img src={done} alt="Готово" className={ styles.done } />
        <p className={`${ styles.textDefault } text text_type_main-default`}>
          Ваш заказ начали готовить
        </p>
        <p className={`${ styles.textInactive } text_type_main-default text_color_inactive pb-30`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </>
  )
}

OrderDetails.propTypes = {
  ingredientsID: PropTypes.array.isRequired,
}

export default OrderDetails;