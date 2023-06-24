import React from "react";
import "./CartPage.css";

const CartPage = ({ cartItems }) => {
	return (
		<div className="cart-container">
			<h1>Shopping Cart</h1>
			{cartItems.length === 0 ? (
				<p>No items in the cart.</p>
			) : (
				<div className="cart-items">
					{cartItems.map(
						(item, index) => (
							<div
								className="cart-item"
								key={index}
							>
								<img
									src={item.image}
									alt={item.name}
								/>
								<div className="item-details">
									<h3>{item.name}</h3>
									<p>
										Price: ₹{item.price}
									</p>
									<p>
										Quantity:{" "}
										{item.quantity}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			)}
			{cartItems.length > 0 && (
				<div className="cart-summary">
					<h2>Cart Summary</h2>
					<p>
						Total Items:{" "}
						{cartItems.length}
					</p>
					<button className="checkout-button">
						Checkout
					</button>
				</div>
			)}
		</div>
	);
};

export default CartPage;
