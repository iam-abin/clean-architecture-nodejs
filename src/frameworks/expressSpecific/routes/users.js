const express = require("express");

const { userControllers } = require("../../../controllers");


module.exports = (dependencies) => {
	const router = express.Router();

	const {
		addUserController,
		getUserByIdController,
		updateUserController,
		deleteUserController,
	} = userControllers(dependencies);

	router
		.route("/")
		.post(addUserController)
		.put(updateUserController)
		.delete(deleteUserController);

	router.route("/:id").get(getUserByIdController);

    
	return router;
};
