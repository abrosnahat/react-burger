import React from 'react';
import styles from './App.module.css';
import AppHeader from '../App-header/Appheader';
import BurgerIngredients from '../Burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../Burger-constructor/BurgerConstructor';
import '../../index.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../Order-details/OrderDetails';
import IngredientDetails from '../Ingredient-details/IngredientDetails';

const App = () => {
  const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

  const [ingredients, setIngredients] = React.useState([]);
  const [visibleOrderDetails, setVisibleOrderDetails] = React.useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = React.useState(false);
  const [activeIngredient, setActiveIngredient] = React.useState({});

  const getIngredients = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setIngredients(data.data))
      .catch(e => console.log(e));
  };

  const openModalOrderDetails = () => {
      setVisibleOrderDetails(true);
  }
  
  const updateActiveIngredient = (ingredient) => {
    setActiveIngredient(ingredient);
  }

  const openModalIngredientDetails = () => {
    setVisibleIngredientDetails(true);
  }

  const closeModal = () => {
    setVisibleOrderDetails(false);
    setVisibleIngredientDetails(false);
  }

  React.useEffect(() => {
    getIngredients();
  }, [])


  return (
    <>
      <AppHeader />
      <main className="container" >
        <h1 className={ styles.title } >Соберите бургер</h1>
        <section className={ styles.content} >
          <BurgerIngredients
            data={ingredients}
            updateActiveIngredient={updateActiveIngredient}
            openIngredientDetails={openModalIngredientDetails}
          />
          {ingredients.length !== 0 && <BurgerConstructor
            data={ingredients}
            openOrderDetails={openModalOrderDetails}
            updateActiveIngredient={updateActiveIngredient}
            openIngredientDetails={openModalIngredientDetails}
          />}
          
        </section>
      </main>
      {visibleOrderDetails &&
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      }
      {visibleIngredientDetails && 
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails ingredient={activeIngredient} />
        </Modal>
      }
    </>
  );
}

export default App;
