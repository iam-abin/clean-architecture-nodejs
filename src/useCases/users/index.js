const addUserUseCase = require("./addUser");
const getUserByIdUseCase = require("./getUserById");
const updateUserUseCase = require("./updateUser");
const deleteUserUseCase = require("./deleteUser");

module.exports = { addUserUseCase, getUserByIdUseCase, updateUserUseCase, deleteUserUseCase };

// The use case should trigger the repository functionality.
// use case is a layer that will handle a specific business case for example getUserById or updateUser and
//  will have all required validations and manipulation.
// A good use case is a use case that doesn't know about the web frameworks and how to get data and can be reusable in many projects.

// In this project, every use case will be a closure that will receive dependencies and will return an execution function.
