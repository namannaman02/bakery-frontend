import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartButton.css';

const CartButton = ({ itemCount }) => {
  return (
    <Link to="/cart" className="cart-button">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </Link>
  );
};

export default CartButton;

