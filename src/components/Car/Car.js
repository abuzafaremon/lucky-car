import React from 'react';
import './Car.css'

const Car = ({car}) => {
  const {name, price, thumb}=car
  return (
    <div className='car'>
      <img src={thumb} alt="" />
      <h3>Name: {name} </h3>
      <h4>Price: ${price} </h4>
    </div>
  );
};

export default Car;