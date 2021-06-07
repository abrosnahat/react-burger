import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Constructor.module.css';
import bun1 from '../../images/bun-01.png';

const BurgerConstructor = ({ data, openOrderDetails, openIngredientDetails, updateActiveIngredient }) => {


  return (
    <section className="pl-4">
      <div className="ml-8 mb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={bun1}
        />
      </div>

      <div className={ styles.list }   >
        {
          data.map( item => {
            const openDetails = () => {
              updateActiveIngredient(item);
              openIngredientDetails();
            }

            return (
              <div className={ styles.item } key={item._id}  >
                <DragIcon type="primary" />
                  <div onClick={openDetails}>
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                      />
                  </div>
              </div>
            )
          })
        }
      </div>
      

      <div className="ml-8"  >
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bun1}
        />
      </div>

      <div className={`${styles.total} mt-10 mr-4`}>
        <span className={"text text_type_digits-medium mr-10"} >610 <CurrencyIcon type="primary" /></span>
        <Button onClick={openOrderDetails} type="primary" size="large">
            Оформить заказ
        </Button>
      </div>
    </section>
     
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired
        })),
  openOrderDetails: PropTypes.func.isRequired,
  openIngredientDetails:  PropTypes.func.isRequired,
  updateActiveIngredient:  PropTypes.func.isRequired
}

export default BurgerConstructor;