module.exports = (dependencies) => {
	const { ordersRepository } = dependencies;

	if (!ordersRepository) {
		throw new Error("orderRepository should be exist in dependencies");
	}

	const execute = ({ order }) => {
		return ordersRepository.delete(order);
	};

    // // we can add more functions
    // const executeDeleteAll = ({ order }) => {
	// 	return ordersRepository.delete(order);
	// };

	return {
        execute,
        // executeDeleteAll,
    };
};
