import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  return (
    <div className="cart-info">
      <h2>This is cart</h2>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;