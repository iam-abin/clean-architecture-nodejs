const { User } = require("../../entities");

// we need to make this sas abstract
// The use case should trigger the repository functionality.

module.exports = (dependencies) => {
	const { usersRepository } = dependencies;

	if (!usersRepository) {
		throw new Error("The users repository should exist in dependencies");
	}

	const execute = ({ name, lastName, gender, metaData }) => {
		const user = new User({
			name,
			lastName,
			gender,
			metaData,
		});

		return usersRepository.add(user);
	};
};

return { execute };
