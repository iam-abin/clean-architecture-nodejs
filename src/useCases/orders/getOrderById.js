module.exports = (dependencies) => {
	const { ordersRepository } = dependencies;

	if (!ordersRepository) {
		throw new Error("orderRepository should be exist in dependencies");
	}

	const execute = ({ id }) => {
		return ordersRepository.getById(id);
	};

	return { execute };
};
