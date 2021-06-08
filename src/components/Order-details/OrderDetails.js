import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderDetails.module.css';
import done from '../../images/done.png';

const OrderDetails = () => {
    return (
        <>
          <p className={`${ styles.id } text text_type_digits-large`}>034536</p>
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
  onClose: PropTypes.func.isRequired,
}

export default OrderDetails;