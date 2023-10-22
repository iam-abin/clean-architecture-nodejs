const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			productUseCases: { getProductByIdUseCase },
		},
	} = dependencies;

	return async (req, res, next) => {
		try {
			const { id } = req.params;
			const getProductById = getProductByIdUseCase(dependencies);
			const response = await getProductById.execute({ id });

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
