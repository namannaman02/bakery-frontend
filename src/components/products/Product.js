import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
	product,
	addToCart,
}) => {
	const [isHovered, setIsHovered] =
		useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleAddToCart = () => {
		addToCart(product);
		// Perform cart-related logic
	};

	return (
		<div
			className={`product ${
				isHovered ? "hovered" : ""
			}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleMouseLeave}
		>
			<img
				src={product.image}
				alt={product.name}
				className="product-image"
			/>
			<div className="product-info">
				<h2 className="product-name">
					{product.name}
				</h2>
				<p className="product-description">
					{product.description}
				</p>
				<div className="product-buttons">
					<button
						className="add-to-cart-button"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
					<Link
						to={`/product/${product.id}`}
						className="product-link"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
