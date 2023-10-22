const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			productUseCases: { updateProductUseCase },
		},
	} = dependencies;

	return async (req, res, next) => {
		try {
			const { id, name, description, images, price, color, metaData } = req.body;
			const updateProduct = updateProductUseCase(dependencies);
			const response = await updateProduct.execute({
				product: {
					id,
					name,
					description,
					images,
					price,
					color,
					metaData,
				},
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
