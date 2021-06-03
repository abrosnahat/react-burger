import React from 'react';
import AppStyles from './App.module.css';
import Appheader from '../AppHeader/Appheader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data';
import '../../index.css'

function App() {
  return (
    <>
      <Appheader />
      <main className="container" >
        <h1 className={ AppStyles.title } >Соберите бургер</h1>

        <section className={ AppStyles.content} >
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </section>
      </main>
    </>
  );
}

export default App;
