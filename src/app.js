const express = require("express");
const dotenv = require("dotenv");

const { connect: connectDB } = require("./frameworks/database/mongo");


const app = express();
dotenv.config();

// routes
app.get("/", (req, res) => {
	res.send("Hello world");
});

const PORT = process.env.PORT || 8080;

module.exports = {
	start: () => {
		app.listen(PORT, () => {
			console.log(`listening to port ${PORT}`);
			connectDB();
		});
	},
};
