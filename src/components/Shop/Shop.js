import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( ()=>{
    fetch('cars.json')
    .then(res => res.json())
    .then(data => setCars(data))
  },[])

  const handleAddToCart = (car) =>{
    console.log(car);
    const newCart = [...cart, car];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className="cars-container">
        {
          cars.map(car => <Car 
          key={car.id}
          car={car}
          handleAddToCart={handleAddToCart}
          ></Car>)
        }
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;