const { Order } = require("../../entities");

module.exports = (dependencies) => {
	const { ordersRepository } = dependencies;

	if (!ordersRepository) {
		throw new Error("orderRepository should be exist in dependencies");
	}

	const execute = ({ userId, productsIds, date, isPayed, metaData }) => {
		const order = new Order({
			userId,
			productsIds,
			date,
			isPayed,
			metaData,
		});

		return ordersRepository.add(order);
	};

	return { execute };
};
