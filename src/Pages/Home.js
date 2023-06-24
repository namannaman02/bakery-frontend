import React from "react";
import Product from "../components/products/Product";
import "./Home.css";

const Home = (props) => {
	return (
		<div className="container">
			{props.products.map((product) => (
				<div
					key={product.id}
					className="product-card"
				>
					<Product
						product={product}
						addToCart={props.addToCart}
					/>
				</div>
			))}
		</div>
	);
};

export default Home;
