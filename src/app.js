const express = require("express");
const dotenv = require("dotenv");
const logger = require('morgan');

const { connect: connectDB } = require("./frameworks/database/mongo");
const routes = require('./frameworks/expressSpecific/routes');
const dependencies = require("./config/dependencies");

const API_PREFIX = process.env.API_PREFIX || '/api/v1'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;

module.exports = {
	start: () => {
		// Middlewares
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(logger('dev'))

		// Routes
		app.use(API_PREFIX,routes(dependencies))

		// Common error handler

		app.listen(PORT, () => {
			console.log(`listening to port ${PORT}`);
			connectDB();
		});
	},
};
