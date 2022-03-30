import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);
  const[randomCar, setRandomCar] = useState({});
  // console.log(randomCar)

  useEffect( ()=>{
    fetch('cars.json')
    .then(res => res.json())
    .then(data => setCars(data))
  },[])

  const handleAddToCart = (car) =>{
      console.log(cart.length)
      // console.log(newCart)
      if(cart.length <= 3 && cart.indexOf(car)=== -1){
        const newCart = [...cart, car];
        
        // const addedCar = newCart.map(car => car.id);
        
        setCart(newCart);
      }
  }
  const chooseOne = () =>{
   const randomCarNum = Math.floor(Math.random()* cart.length);
   const randomCar = (cart[randomCarNum]);
   setRandomCar(randomCar);
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
        <div className="cart-info">
          <h2 className='cart-title'>Selected Cars</h2>
          <p>Selected Items: {cart.length}</p>
        {
          cart.map(car => <Cart 
            key={car.id} 
            car={car}
            ></Cart>)
        }
        {Object.keys(randomCar).length>0 && (<div className='random-car'>
          <img src={randomCar.thumb} alt="" />
          <div>
          <h4>{randomCar.name}</h4>
          <h6>Price: {randomCar.price}</h6>
          </div>
          <FontAwesomeIcon className='icon' icon={faCheck}></FontAwesomeIcon>
        </div>)}
        {Object.keys(cart).length>3 && (<div className="btn-group">
          <button onClick={chooseOne} className='choose-btn'>Choose 1 for me</button>
          <br />
          <button className='choose-again-btn'>
            <p>Choose Again</p>
          </button>
        </div>)}
        </div>
      </div>
    </div>
  );
};

export default Shop;