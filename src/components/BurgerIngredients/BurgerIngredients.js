import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState('one');

  const getTabList = (type) => {
    return data
      .filter(item => item.type === type)
      .map(item => 
        <div  className={ BurgerIngredientsStyles.tabItem } key={item._id}>
          <Counter count={1} size="default" className={ BurgerIngredientsStyles.tabCounter } />
          <img src={item.image} alt={item.name} className={ BurgerIngredientsStyles.tabImg } />
          <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >{item.price} </span><CurrencyIcon type="primary" />
          <p className="text text_type_main-default mt-1">{item.name}</p>
        </div>
      );
  };

  return (
    <section className={ BurgerIngredientsStyles.tab }>
      <div className={ BurgerIngredientsStyles.tabButton }>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
          </Tab>
      </div>
      <div className={ BurgerIngredientsStyles.tabСontent } >
        <p className={ BurgerIngredientsStyles.tabTitle } >Булки</p>
        <div className={ BurgerIngredientsStyles.tabList } >
          { getTabList('bun') }
        </div>

        <p className={ BurgerIngredientsStyles.tabTitle } >Соусы</p>
        <div className={ BurgerIngredientsStyles.tabList } >
          { getTabList('sauce') }
        </div>

        <p className={ BurgerIngredientsStyles.tabTitle } >Основа</p>
        <div className={ BurgerIngredientsStyles.tabList } >
          { getTabList('main') }
        </div>
      </div>
    </section>    
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired
        }))
}

export default BurgerIngredients;