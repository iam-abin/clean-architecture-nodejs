module.exports = (dependencies) => {
	const { ordersRepository } = dependencies;

	if (!ordersRepository) {
		throw new Error("orderRepository should be exist in dependencies");
	}

	const execute = ({ order }) => {
		return ordersRepository.update(order);
	};

	return { execute };
};
