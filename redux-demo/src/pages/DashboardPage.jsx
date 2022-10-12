import React from "react";
import Products from "../components/Products";

const DashboardPage = () => {
	return (
		<div>
			<h1 data-testid="title">My E-Commerce</h1>
			<Products />
		</div>
	);
};

export default DashboardPage;
