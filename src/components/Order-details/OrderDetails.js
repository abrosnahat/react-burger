import React from 'react';
import styles from './OrderDetails.module.css';
import done from '../../images/done.png';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../services/actions/orderDetails';
import loader from '../../images/loader.svg'

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { ingredientsID, orderNumber, isLoading } = useSelector(state => state.orderDetails);

  React.useEffect(() => {
    dispatch(getOrderNumber(ingredientsID));
  }, [dispatch, ingredientsID]);


  return (
      <>
        {isLoading
          ? <img src={loader} alt="Loader" className={ styles.loader } />
          : <p className={`${ styles.id } text text_type_digits-large`}>{orderNumber}</p>
        }
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


export default OrderDetails;