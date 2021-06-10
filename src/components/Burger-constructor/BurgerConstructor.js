import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Constructor.module.css';
import { DataContext } from '../services/ingredientContext';

const BurgerConstructor = ({ openOrderDetails, openIngredientDetails, updateActiveIngredient, updateIngredientsID }) => {
  const data = React.useContext(DataContext);

  const ingredients = data.filter(item => item.type !== "bun");
  const bun = data[0];

  const totalPrice = ingredients.reduce((acc, item) => acc += item.price, 0) + bun.price * 2;

  const ingredientsID = ingredients.map(item => item._id);
  ingredientsID.push(bun._id, bun._id);

  React.useEffect(() => {
    updateIngredientsID(ingredientsID);
    // eslint-disable-next-line
  }, [])
 

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
          ingredients
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
  openOrderDetails: PropTypes.func.isRequired,
  openIngredientDetails:  PropTypes.func.isRequired,
  updateActiveIngredient:  PropTypes.func.isRequired,
  updateIngredientsID: PropTypes.func.isRequired
}

export default BurgerConstructor;