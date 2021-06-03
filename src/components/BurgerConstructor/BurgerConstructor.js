import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorStyles from './Constructor.module.css';
import bun1 from '../../images/bun-01.png';


const BurgerConstructor = ({ data }) => {
  return (
    <section className="pl-4">
      <div className="ml-8 mb-4" >
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={bun1}
        />
      </div>

      <div className={ ConstructorStyles.list }   >
        {
          data.map( item => 
            <div className={ ConstructorStyles.item } key={item._id}>
              <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
            </div>
          )
        }
      </div>
      

      <div className="ml-8" >
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bun1}
        />
      </div>

      <div className={`${ConstructorStyles.total} mt-10 mr-4`}>
        <span className={"text text_type_digits-medium mr-10"} >610 <CurrencyIcon type="primary" /></span>
      
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
      
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired
        }))
}

export default BurgerConstructor;