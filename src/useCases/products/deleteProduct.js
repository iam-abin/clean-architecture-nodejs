module.exports = (dependencies) => {
	const { productsRepository } = dependencies;

	if (!productsRepository) {
		throw new Error("productRepository should be in dependencies");
	}

	const execute = ({ product }) => {
		return productsRepository.delete(product);
	};

	return { execute };
};
