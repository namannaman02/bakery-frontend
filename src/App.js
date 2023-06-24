import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import ProductDescription from "./Pages/ProductDescription";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import blueberryMuffins from "./Images/Blueberry-Muffins.webp";
import chocolateCake from "./Images/Chocolate-Cake.webp";
import redVelvet from "./Images/red-velvet-cake.jpeg";
import macarons from "./Images/macarons.jpg";
import ContactPage from "./components/contact/ContactPage";
import AboutPage from "./components/aboutUs/AboutPage";
import CartPage from "./components/cartPage/CartPage";

const App = () => {
	const [cartItems, setCartItems] =
		useState([]);

	const addToCart = (product) => {
		setCartItems((prevItems) => [
			...prevItems,
			product,
		]);
		// Add logic to update the cart data or state with the new product
	};

	const products = [
		{
			id: 1,
			name: "Chocolate Cake",
			image: chocolateCake,
			description:
				"Delicious chocolate cake with rich flavor.",
			price: "259",
		},
		{
			id: 2,
			name: "Blueberry Muffins",
			image: blueberryMuffins,
			description:
				"Freshly baked blueberry muffins, perfect for breakfast.",
			price: "259",
		},
		{
			id: 3,
			name: "Red velvet Cake",
			image: redVelvet,
			description:
				"Freshly baked blueberry muffins, perfect for breakfast.",
			price: "259",
		},
		{
			id: 4,
			name: "Macarons",
			image: macarons,
			description:
				"Freshly bakedblueberry muffins, perfect for breakfast.",
			price: "259",
		},
	];

	return (
		<Router>
			<div className="app">
				<Header
					cartItemCount={
						cartItems.length
					}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								addToCart={addToCart}
								products={products}
							/>
						}
					/>
					<Route
						path="/product/:productId"
						element={
							<ProductDescription
								addToCart={addToCart}
								products={products}
							/>
						}
					/>
					<Route
						path="/contact"
						element={<ContactPage />}
					/>
					<Route
						path="/About"
						element={<AboutPage />}
					/>
					<Route
						path="/cart"
						element={
							<CartPage
								cartItems={cartItems}
							/>
						}
					/>
					{/* Add more routes as needed */}
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
