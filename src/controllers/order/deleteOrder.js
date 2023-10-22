const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			orderUseCases: { deleteOrderUseCase },
		},
	} = dependencies;

	return async (req, res, next) => {
		try {
			const { id, userId, productsIds, date, isPayed, metaData } = req.body;

			const deleteOrder = deleteOrderUseCase(dependencies);
			const response = deleteOrder.execute({
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
