module.exports = (dependencies) => {
	const { productsRepository } = dependencies;

	if (!productsRepository) {
		throw new Error("productRepository should be in dependencies");
	}

	const execute = ({ product }) => {
		return productsRepository.update(product);
	};

	return { execute };
};
