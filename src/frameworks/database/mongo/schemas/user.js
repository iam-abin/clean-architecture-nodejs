const { Schema } = require("mongoose");

module.exports = new Schema({
	name: String,
	lastName: String,
	gender: Number,
	metaData: Object,
	deletedAt: Date,
	updatedAt: Date,
});
