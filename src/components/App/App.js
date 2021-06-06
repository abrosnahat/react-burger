import React from 'react';
import styles from './App.module.css';
import AppHeader from '../App-header/Appheader';
import BurgerIngredients from '../Burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../Burger-constructor/BurgerConstructor';
import data from '../../utils/data';
import '../../index.css'

function App() {
  return (
    <>
      <AppHeader />
      <main className="container" >
        <h1 className={ styles.title } >Соберите бургер</h1>

        <section className={ styles.content} >
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </section>
      </main>
    </>
  );
}

export default App;
