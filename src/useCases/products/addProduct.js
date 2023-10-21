const { Product } = require("../../entities");

module.exports = (dependencies) => {
	const { productsRepository } = dependencies;

	if (!productsRepository) {
		throw new Error("productRepository should be in dependencies");
	}

	const execute = ({ name, description, images, price, color, metaData }) => {
		const product = new Product({
			name,
			description,
			images,
			price,
			color,
			metaData,
		});

		return productsRepository.add(product);
	};

	return { execute };
};
