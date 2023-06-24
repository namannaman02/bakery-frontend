import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDescription.css";

const ProductDescription = ({
	addToCart,
	products,
}) => {
	const { productId } = useParams();

	// Find the product with the matching productId
	const product = products.find(
		(product) =>
			product.id === parseInt(productId)
	);

	if (!product) {
		return <div>Product not found</div>;
	}

	const { image, name, description } =
		product;

	const handleAddToCart = () => {
		addToCart(product);
	};

	return (
		<div className="product-description">
			<img
				src={image}
				alt={name}
				className="product-image"
			/>
			<h2 className="product-name">
				{name}
			</h2>
			<p className="product-description">
				{description}
			</p>
			<button onClick={handleAddToCart}>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductDescription;
