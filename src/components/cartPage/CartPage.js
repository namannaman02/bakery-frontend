import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For example, you can redirect to a checkout page or perform other actions
    console.log('Checkout button clicked!');
  };

  return (
    <div className="cart-page">
      <h2 className="page-title">Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <span>Total: ₹{totalPrice.toFixed(2)}</span>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CartPage;
