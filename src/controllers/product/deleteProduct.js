const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			productUseCases: { deleteProductUseCase },
		},
	} = dependencies;

	return async (req, res, next) => {
		try {
			const { id, name, description, images, price, color, metaData } = req.body;
			const deleteProduct = deleteProductUseCase(dependencies);
			const response = await deleteProduct.execute({
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
