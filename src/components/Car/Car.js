import React from 'react';
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
        </button>
    </div>
  );
};

export default Car;