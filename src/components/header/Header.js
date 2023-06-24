import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import "./Header.css";

const Header = (props) => {
	return (
		<header className="header">
			<h1 className="logo">
				My Bakery
			</h1>
			<nav className="nav">
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/about">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
			<CartButton
				itemCount={props.cartItemCount}
			/>
		</header>
	);
};

export default Header;
