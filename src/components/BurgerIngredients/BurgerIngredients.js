import React from 'react';
import BurgerIngredientsStyles from './BurgerIngredients.module.css'
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bun1 from '../../images/bun-01.png';
import bun2 from '../../images/bun-02.png';
import sauce1 from '../../images/sauce-01.png';
import sauce2 from '../../images/sauce-02.png';
import sauce3 from '../../images/sauce-03.png';
import sauce4 from '../../images/sauce-04.png';



function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');

  return (
    <div className={ BurgerIngredientsStyles.tab }>
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
          <div  className={ BurgerIngredientsStyles.tabItem }>
            <Counter count={1} size="default" className={ BurgerIngredientsStyles.tabCounter } />
            <img src={bun2} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >20 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Краторная булка N-200i</p>
          </div>
          <div  className={ BurgerIngredientsStyles.tabItem }>
    
            <img src={bun1} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >20 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Флюоресцентная булка R2-D3</p>
          </div>
        </div>

        <p className={ BurgerIngredientsStyles.tabTitle } >Соусы</p>
        <div className={ BurgerIngredientsStyles.tabList } >
          <div  className={ BurgerIngredientsStyles.tabItem }>
            
            <img src={sauce2} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >30 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Соус Spicy-X</p>
          </div>
          <div  className={ BurgerIngredientsStyles.tabItem }>
    
            <img src={sauce4} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >30 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Соус фирменный Space Sauce</p>
          </div>
          <div  className={ BurgerIngredientsStyles.tabItem }>
            <Counter count={1} size="default" className={ BurgerIngredientsStyles.tabCounter } />
            <img src={sauce3} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >30 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Соус Spicy-X</p>
          </div>
          <div  className={ BurgerIngredientsStyles.tabItem }>
    
            <img src={sauce1} className={ BurgerIngredientsStyles.tabImg } />
            <span className={`${BurgerIngredientsStyles.tabPrice} text text_type_main-medium`} >30 </span><CurrencyIcon type="primary" />
            <p className="text text_type_main-default mt-1">Соус фирменный Space Sauce</p>
          </div>
            
            
        </div>
      </div>
    </div>
          
    )
   
}

export default BurgerIngredients;