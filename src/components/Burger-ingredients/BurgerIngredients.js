import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DataContext } from '../../services/ingredientContext';

const BurgerIngredients = ({ updateActiveIngredient, openIngredientDetails }) => {
  const [current, setCurrent] = React.useState('bun');
  const scrollRefBun = React.useRef(null);
  const scrollRefSauce = React.useRef(null);
  const scrollRefMain = React.useRef(null);

  const data = React.useContext(DataContext);

  const handleScroll = (e) => {
    setCurrent(e);
    if (e === "bun") {
      scrollRefBun.current.scrollIntoView({ behavior: 'smooth' })
    } else if (e === "sauce") {
        scrollRefSauce.current.scrollIntoView({ behavior: 'smooth' })
      } else {
          scrollRefMain.current.scrollIntoView({ behavior: 'smooth' })
        };
  }

  const ingredientsList = (type) => {
    return data
      .filter(item => item.type === type)
      .map(item => {
        const openDetails = () => {
          updateActiveIngredient(item);
          openIngredientDetails();
        }

        return (
          <div  className={ styles.item } key={item._id} onClick={openDetails}>
            <Counter count={1} size="default" className={ styles.counter } />
            <img src={item.image} alt={item.name} className={ styles.img } />
            <span className={`${styles.price} text text_type_main-medium`} >{item.price} </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">{item.name}</p>
          </div>
        )
      });
  };

  return (
    <section className={ styles.tab }>
      <div className={ styles.tabButton }>
          <Tab value="bun" active={current === 'bun'} onClick={handleScroll}>
              Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={handleScroll}>
              Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={handleScroll}>
              Начинки
          </Tab>
      </div>
      <div className={ styles.content } >
        <p className={ styles.title } ref={scrollRefBun} >Булки</p>
        <div className={ styles.list } >
          { ingredientsList('bun') }
        </div>

        <p className={ styles.title } ref={scrollRefSauce} >Соусы</p>
        <div className={ styles.list } >
          { ingredientsList('sauce') }
        </div>

        <p className={ styles.title } ref={scrollRefMain} >Начинка</p>
        <div className={ styles.list } >
          { ingredientsList('main') }
        </div>
      </div>
    </section>    
  )
}

BurgerIngredients.propTypes = {
  openIngredientDetails:  PropTypes.func.isRequired,
  updateActiveIngredient:  PropTypes.func.isRequired
}

export default BurgerIngredients;