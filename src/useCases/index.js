// A use case is a layer that will handle a specific business case

const userUseCases = require("./users");
const productUseCases = require("./products");
const orderUseCases = require("./orders");

module.exports = { userUseCases, productUseCases, orderUseCases };
