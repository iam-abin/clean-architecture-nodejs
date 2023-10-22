const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const { useCases: { productUseCases: { addProductUseCase } } } = dependencies;
    
	return async (req, res, next) => {
		try {
			const { name, description, images, price, color, metaData } = req.body;
			const addProduct = addProductUseCase(dependencies);
			const response = await addProduct.execute({
				name,
				description,
				images,
				price,
				color,
				metaData,
			});

			res.json(
				new Response({
					status: true,
					content: response,
				})
			);

			next();
		} catch (error) {
			next(error);
		}
	};
};
