import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { SET_ACTIVE_INGREDIETN } from '../../services/actions/ingredientDetails';
import BurgerIngredientsCard from './card/BurgerIngredientsCard';
import loader from '../../images/loader.svg';

const BurgerIngredients = ({ openIngredientDetails }) => {
  const dispatch = useDispatch();

  const [current, setCurrent] = React.useState('bun');
  const scrollRefBun = React.useRef(null);
  const scrollRefSauce = React.useRef(null);
  const scrollRefMain = React.useRef(null);

  const { data, isLoading } = useSelector(state => state.ingredients);

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

  const handleActiveTab = (e) => {
    const scrollTop = e.target.scrollTop;
 
    const bunTop = scrollRefBun.current.getBoundingClientRect().top;
    const sauceTop = scrollRefSauce.current.getBoundingClientRect().top;
    const mainTop = scrollRefMain.current.getBoundingClientRect().top;

    switch (true) {
      case (scrollTop < bunTop): {
        setCurrent('bun');
        break;
      }
      case (scrollTop > bunTop && scrollTop < sauceTop): {
        setCurrent('sauce');
        break;
      } 
      case (scrollTop > mainTop): {
        setCurrent('main');
        break;
      }
      default:
        return;
    }
  }

  const ingredientsList = (type) => {
    return data
      .filter(item => item.type === type)
      .map((item, index) => {
        const openDetails = () => {
          dispatch({ type: SET_ACTIVE_INGREDIETN, activeIngredient: item })
          openIngredientDetails();
        }

        return (<BurgerIngredientsCard item={item} openDetails={openDetails} key={index} />)
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
      {isLoading
        ? <img src={loader} alt="Loader" className={ styles.loader } />
        : (<div className={ styles.content }  onScroll={handleActiveTab} >
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
          </div>)
      }
    </section>    
  )
}

BurgerIngredients.propTypes = {
  openIngredientDetails:  PropTypes.func.isRequired
}

export default BurgerIngredients;