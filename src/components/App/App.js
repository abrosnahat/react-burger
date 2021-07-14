import React from 'react';

import styles from './App.module.css';
import AppHeader from '../App-header/Appheader';
import BurgerIngredients from '../Burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../Burger-constructor/BurgerConstructor';
import '../../index.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../Order-details/OrderDetails';
import IngredientDetails from '../Ingredient-details/IngredientDetails';
import { getIngredients } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from 'react-redux';
import { VISIBLE_ORDER_DETAILS, VISIBLE_INGREDIENT_DATAILS } from '../../services/actions/modals';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();

  const visibleOrderDetails = useSelector(state => state.modals.visibleOrderDetails);
  const visibleIngredientDetails =  useSelector(state => state.modals.visibleIngredientDetails);

  const openModalOrderDetails = () => {
    dispatch({ type: VISIBLE_ORDER_DETAILS, value: true })
  }

  const openModalIngredientDetails = () => {
    dispatch({ type: VISIBLE_INGREDIENT_DATAILS, value: true })
  }

  const closeModal = () => {
    dispatch({ type: VISIBLE_ORDER_DETAILS, value: false })
    dispatch({ type: VISIBLE_INGREDIENT_DATAILS, value: false })
  }

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <>
      <AppHeader />
        <main className="container" >
          <h1 className={ styles.title } >Соберите бургер</h1>
          <section className={ styles.content} >
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients
              openIngredientDetails={openModalIngredientDetails}
            />
            <BurgerConstructor
              openOrderDetails={openModalOrderDetails}
              openIngredientDetails={openModalIngredientDetails}
            />
          </DndProvider>
          </section>
        </main>
      {visibleOrderDetails &&
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      }
      {visibleIngredientDetails && 
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails />
        </Modal>
      }
    </>
  );
}

export default App;
