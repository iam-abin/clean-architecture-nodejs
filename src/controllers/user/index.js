const addUserController = require("./addUser");
const getUserByIdController = require("./getUserById");
const updateUserController = require("./updateUser");
const deleteUserController = require("./deleteUser");

module.exports = (dependencies) => {
    return {
        addUserController: addUserController(dependencies),
        getUserByIdController: getUserByIdController(dependencies),
        updateUserController: updateUserController(dependencies),
        deleteUserController: deleteUserController(dependencies),
    }
};


// here the login will be under some closure