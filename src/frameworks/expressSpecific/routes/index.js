const express = require("express");

const usersRouter = require("./users");
const productsRouter = require("./products");
const ordersRouter = require('./orders')

module.exports = (dependencies) => {
	const router = express.Router();

	const users = usersRouter(dependencies);
	const products = productsRouter(dependencies);
	const orders = ordersRouter(dependencies)

	router.use("/users", users);
	router.use("/products", products);
	router.use("/orders", orders);

	return router;
};
