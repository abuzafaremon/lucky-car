import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
  const [cars, setCars] = useState([]);
  useEffect( ()=>{
    fetch('cars.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div className='shop-container'>
      <div className="cars-container">
        <h2>Cars Container</h2>
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
      </div>
    </div>
  );
};

export default Shop;