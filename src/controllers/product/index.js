const addProductController = require("./addProduct");
const getProductByIdController = require("./getProductById");
const updateProductController = require("./updateProduct");
const deleteProductController = require("./deleteProduct");

module.exports = (dependencies) => {
	return {
		addProductController: addProductController(dependencies),
		getProductByIdController: getProductByIdController(dependencies),
		updateProductController: updateProductController(dependencies),
		deleteProductController: deleteProductController(dependencies),
	};
};
