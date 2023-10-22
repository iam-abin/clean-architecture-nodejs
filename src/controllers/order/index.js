const addOrderController = require("./addOrder");
const getOrderByIdController = require("./getOrderById");
const updateOrderController = require("./updateOrder");
const deleteOrderController = require("./deleteOrder");

module.exports = (dependencies) => {
	return {
		addOrderController: addOrderController(dependencies),
		getOrderByIdController: getOrderByIdController(dependencies),
		updateOrderController: updateOrderController(dependencies),
		deleteOrderController: deleteOrderController(dependencies),
	};
};
