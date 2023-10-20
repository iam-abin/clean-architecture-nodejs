const mongoose = require("mongoose");
const schemas = require("./schemas");

module.exports = {
	connect: async () => {
		try {
			await mongoose.connect(process.env.MONGODB_URI);
			console.log("db connected...");
		} catch (error) {
			console.log("db connection failed!!!!!!!");
			console.log(error);
		}
	},
	schemas,
};
