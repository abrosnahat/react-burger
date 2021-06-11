import React from 'react';
import styles from './App.module.css';
import AppHeader from '../App-header/Appheader';
import BurgerIngredients from '../Burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../Burger-constructor/BurgerConstructor';
import '../../index.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../Order-details/OrderDetails';
import IngredientDetails from '../Ingredient-details/IngredientDetails';
import { DataContext } from '../../services/ingredientContext';

const App = () => {
  const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

  const [ingredients, setIngredients] = React.useState([]);
  const [visibleOrderDetails, setVisibleOrderDetails] = React.useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = React.useState(false);
  const [activeIngredient, setActiveIngredient] = React.useState({});
  const [ingredientsID, setIngredientsID] = React.useState([]);

  const getIngredients = () => {
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
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

  const updateIngredientsID = (ingredientsID) => {
    setIngredientsID(ingredientsID);
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
          <DataContext.Provider value={ingredients} >
            <BurgerIngredients
              updateActiveIngredient={updateActiveIngredient}
              openIngredientDetails={openModalIngredientDetails}
            />
            {
              ingredients.length !== 0 &&
                <BurgerConstructor
                  openOrderDetails={openModalOrderDetails}
                  updateActiveIngredient={updateActiveIngredient}
                  openIngredientDetails={openModalIngredientDetails}
                  updateIngredientsID={updateIngredientsID}
                />
            }
          </DataContext.Provider>
        </section>
      </main>
      {visibleOrderDetails &&
        <Modal onClose={closeModal}>
          <OrderDetails ingredientsID={ingredientsID} />
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
