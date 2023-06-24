import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
	product,
	addToCart,
}) => {
	const handleAddToCart = () => {
		addToCart(product);
	};

	return (
		<div className="product">
			<img
				className="product-image"
				src={product.image}
				alt={product.name}
			/>
			<h3 className="product-name">
				{product.name}
			</h3>
			<p className="product-description">
				{product.description}
			</p>
			<p className="product-price">
				Price: ₹{product.price}
			</p>
			<div className="buttons">
				<button
					className="add-to-cart-button"
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
				<Link
					to={`/product/${product.id}`}
					className="view-details-button"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default Product;
