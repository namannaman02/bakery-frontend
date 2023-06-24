import React from 'react';
import './CartModal.css';

const CartModal = ({ cartItems }) => {
  return (
    <div className="cart-modal">
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
            <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
      {/* Checkout and close buttons */}
    </div>
  );
};

export default CartModal;
