import React from 'react';
import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const ingredient =  useSelector(state => state.ingredientDetails.activeIngredient);
  
  return (
    <div className={ styles.content }>
      <img src={ingredient.image_large} alt={ingredient.name} className={ styles.img } />
      <p className="text text_type_main-medium mt-4">
        {ingredient.name}
      </p>
      <section className={ styles.value } >
        <div className={ styles.item }>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default  text_color_inactive mt-2">
            {ingredient.calories}
          </p>
        </div>
        <div className={ styles.item }>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default  text_color_inactive mt-2">
            {ingredient.proteins}
          </p>
        </div>
        <div className={ styles.item }>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default  text_color_inactive mt-2">
            {ingredient.fat}
          </p>
        </div>
        <div className={ styles.item }>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default  text_color_inactive mt-2">
            {ingredient.carbohydrates}
          </p>
        </div>
      </section>
    </div>
  )
}

export default IngredientDetails;