const express = require("express");

const { orderControllers } = require("../../../controllers");

module.exports = (dependencies) => {
	const router = express.Router();
    
	const {
		addOrderController,
		getOrderByIdController,
		updateOrderController,
		deleteOrderController,
	} = orderControllers(dependencies);

	router
		.route("/")
		.post(addOrderController)
		.put(updateOrderController)
		.delete(deleteOrderController);

	router.route("/:id").get(getOrderByIdController);

	return router;
};
