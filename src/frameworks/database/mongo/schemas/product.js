const { Schema } = require("mongoose");

module.exports = new Schema({
	name: String,
	description: String,
	images: Array(String),
	price: Number,
	color: String,
	metaData: Object,
	deletedAt: Date,
	updatedAt: Date,
});
