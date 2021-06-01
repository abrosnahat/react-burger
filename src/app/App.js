import React from 'react';
import AppStyles from './App.module.css';
import Appheader from '../components/AppHeader/Appheader';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../components/BurgerConstructor/BurgerConstructor';
import data from '../utils/data';

function App() {
  return (
    <>
      <Appheader />
      <section className={ AppStyles.container } >
        <p className={ AppStyles.title } >Соберите бургер</p>

        <div className={ AppStyles.content} >
          <BurgerIngredients />
          <BurgerConstructor data={data} />
        </div>
      </section>
    </>
  );
}

export default App;
