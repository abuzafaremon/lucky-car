import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
  const [cars, setCars] = useState([]);
  useEffect( ()=>{
    fetch('cars.json')
    .then(res => res.json())
    .then(data => setCars(data))
  },[])

  return (
    <div className='shop-container'>
      <div className="cars-container">
        {
          cars.map(car => <Car key={car.id}
          car={car}
          ></Car>)
        }
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
      </div>
    </div>
  );
};

export default Shop;