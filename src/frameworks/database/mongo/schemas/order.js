const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

module.exports = new Schema({
	userId: ObjectId,
	productsIds: Array(ObjectId),
	date: Date,
	isPayed: Boolean,
	metaData: Object,
	deletedAt: Date,
	updatedAt: Date,
});
