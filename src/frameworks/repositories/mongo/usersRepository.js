const mongoose = require("mongoose");

const entityName = "User"; // representing the name of the collection in our MongoDB database

const {
	schemas: { user: userSchema },
} = require("../../database/mongo");

// we want to export some closure
const repository = () => {
	// create a model for MongoDB collection .
	// User model that you can use to interact with the "User" collection in our MongoDB database.
	const User = mongoose.model(entityName, userSchema);

	// CRUD executables
	return {
		add: async (user) => {
			const userObject = new User(user);
			return userObject.save();
		},

		update: async (user) => {
			const { id } = user;
			delete user.id;
			return User.findByIdAndUpdate(
				id,
				{
					...user,
					updatedAt: new Date(),
				},
				{
					new: true,
				}
			).lean();
		},

		delete: async (user) => {
            const { id } = user;
			delete user.id;
			return User.findByIdAndUpdate(
				id,
				{
					deletedAt: new Date(),
				},
				{
					new: true,
				}
			).lean();
        },

		getById: async (id) => {
            return User.findOne({
                _id: id,
                deletedAt:{
                    $exists: false
                }
            })
        },
	};
};

module.exports = repository();
