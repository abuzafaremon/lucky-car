import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Car.css'

const Car = ({car, handleAddToCart,}) => {
  const {name, price, thumb}=car;

  return (
    <div className='car'>
      <img src={thumb} alt="" />
      <div className="car-info">
        <h3>Name: {name} </h3>
        <p>Price: {price} </p>
      </div>
        <button onClick={()=> handleAddToCart(car)} className='cart-btn'>
          <p>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default Car;