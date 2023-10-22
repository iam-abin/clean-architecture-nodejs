const repositories = require("../frameworks/repositories/mongo");
const useCases = require("../useCases");

module.exports = {
	useCases,
	...repositories,
};
