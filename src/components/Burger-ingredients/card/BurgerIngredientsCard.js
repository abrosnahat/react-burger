import styles from '../BurgerIngredients.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';

const BurgerIngredientsCard = ({ item, openDetails }) => {

  const data = useSelector(state => state.cart.сartIngredients);
  const bun = useSelector(state => state.cart.bunIngredients);

  const [{ opacity }, ref] = useDrag({
    type: 'ingredient',
		item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  const [, bunRef] = useDrag({
    type: 'bun',
		item: item
  });

  const counter = [...data, ...bun].filter(element => element._id === item._id).length;

	return (
    <div ref={item.type === 'bun' ? bunRef : ref} className={ styles.item } key={item._id} onClick={openDetails} style={{opacity}} >
      {counter !== 0 && <Counter count={counter} size="default" className={ styles.counter } />}
      <img src={item.image} alt={item.name} className={ styles.img } />
      <span className={`${styles.price} text text_type_main-medium`} >{item.price} </span><CurrencyIcon type="primary" />
      <p className="text text_type_main-default mt-1">{item.name}</p>
    </div>
  )
}

BurgerIngredientsCard.propTypes = {
  item: (PropTypes.shape({
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })),
  openDetails:  PropTypes.func.isRequired
}


export default BurgerIngredientsCard;