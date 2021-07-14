import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ORDER_INGREDIENT_ID } from '../../services/actions/orderDetails';
import { ADD_CART_INGERDIENT, ADD_CART_INGERDIENT_BUN, DELETE_CART_INGREDIENT, MOVE_CART_INGERDIENT } from '../../services/actions/cart';
import { useDrop, useDrag } from "react-dnd";

const BurgerConstructor = ({ openOrderDetails }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.сartIngredients);

  const bun = useSelector(state => state.cart.bunIngredients[0]);

  const totalPrice = (bun && data.length !== 0) ? data.reduce((acc, item) => acc += item.price, 0) + bun.price * 2 : 0;

  const ingredientsID = data.map(item => item._id);
  null && ingredientsID.push(bun._id, bun._id);

  const orderBurger = () => {
    openOrderDetails();
    dispatch({ type: ORDER_INGREDIENT_ID, ingredientsID: ingredientsID })
  }

  const deleteIngredient = (index) => {
    dispatch({ type: DELETE_CART_INGREDIENT, ingredients: index })
  }

  const ConstructorElementItem = ({item, index}) => {
    const [{opacity}, dragRef] = useDrag({
      type: "move",
      item: () => {
        return { item, index };
      },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    })

    const [, dropRef] = useDrop({
      accept: "move",
      drop(ingredients) {
        dispatch({ type: MOVE_CART_INGERDIENT, ingredients, dropIndex: index })
      }
    });
    
  
    return (
      <div ref={dragRef} style={{opacity}}>
        <div ref={dropRef}>
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => deleteIngredient(index)}
          />
        </div>
      </div>
    )
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredients) {
      dispatch({ type: ADD_CART_INGERDIENT, ingredients: ingredients })
    }
  });

  const [, bunDropUp] = useDrop({
    accept: "bun",
    drop(ingredients) {
      dispatch({ type: ADD_CART_INGERDIENT_BUN, ingredients })
    }
  });

  const [, bunDropDown] = useDrop({
    accept: "bun",
    drop(ingredients) {
      dispatch({ type: ADD_CART_INGERDIENT_BUN, ingredients })
    }
  });
 
  return (
    <section className="pl-4">
      { 
        bun ?
          (
            <div className="ml-8 mb-4" ref={bunDropUp} >
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          ) : (
            <div className="ml-8 mb-4" ref={bunDropUp} >
              <ConstructorElement
                type="top"
                isLocked
              />
            </div>
          )
      }
      
      <div className={ styles.list }  ref={dropTarget} >
        {
          data
            .map( (item, index) => {
              return (
                <div className={ styles.item } key={`${item._id}${index}`} >
                  <DragIcon type="primary" />
                  <ConstructorElementItem item={item} index={index} />
                </div>
            )
          })
        }
      </div>
      { 
        bun ?
          (
            <div className="ml-8 mb-4" ref={bunDropDown}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          ) : (
            <div className="ml-8 mb-4" ref={bunDropDown}>
              <ConstructorElement
                type="bottom"
                isLocked
              />
            </div>
          )
      }
      <div className={`${styles.total} mt-10 mr-4`}>
        <span className={"text text_type_digits-medium mr-10"} >{totalPrice} <CurrencyIcon type="primary" /></span>
        <Button onClick={orderBurger} type="primary" size="large">
            Оформить заказ
        </Button>
      </div>
    </section>
     
  )
}

BurgerConstructor.propTypes = {
  openOrderDetails: PropTypes.func.isRequired
}

export default BurgerConstructor;