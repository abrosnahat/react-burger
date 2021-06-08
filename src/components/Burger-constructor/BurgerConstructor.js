import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Constructor.module.css';

const BurgerConstructor = ({ data, openOrderDetails, openIngredientDetails, updateActiveIngredient }) => {
  const bun = data[0];

  const totalPrice = data.reduce((acc, item) => acc += item.price, 0);

  return (
    <section className="pl-4">
      <div className="ml-8 mb-4">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={ styles.list }   >
        {
          data
            .filter(item => item.type !== "bun")
            .map( item => {
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
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>

      <div className={`${styles.total} mt-10 mr-4`}>
        <span className={"text text_type_digits-medium mr-10"} >{totalPrice} <CurrencyIcon type="primary" /></span>
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
        })).isRequired,
  openOrderDetails: PropTypes.func.isRequired,
  openIngredientDetails:  PropTypes.func.isRequired,
  updateActiveIngredient:  PropTypes.func.isRequired
}

export default BurgerConstructor;