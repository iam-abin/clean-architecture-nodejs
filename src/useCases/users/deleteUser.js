module.exports = (dependencies) => {
	const { usersRepository } = dependencies;

	if (!usersRepository) {
		throw new Error("The users repository should exist in dependencies");
	}

	const execute = ({ user = {} }) => {
        
        // here we can add some business validation rules
        
		return usersRepository.delete(user);
	};
	return { execute };
};

