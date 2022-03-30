import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({car}) => {
  const {name, thumb, price,id}=car;
  
  return (
        <div className="selected-car">
          <img src={thumb} alt="" />
          <div>
          <h4>{name}</h4>
          <h6>Price: {price}</h6>
          </div>
          <button><FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></button>
        </div>
  );
};

export default Cart;