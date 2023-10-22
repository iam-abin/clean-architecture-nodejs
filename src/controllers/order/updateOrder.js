const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			orderUseCases: { updateOrderUseCase },
		},
	} = dependencies;

	return async (req, res, next) => {
		try {
			const { id, userId, productsIds, date, isPayed, metaData } = req.body;

			const updateOrder = updateOrderUseCase(dependencies);
			const response = updateOrder.execute({
				order: {
                    id,
					userId,
					productsIds,
					date,
					isPayed,
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
