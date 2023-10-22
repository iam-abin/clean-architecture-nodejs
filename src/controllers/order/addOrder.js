const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const { useCases: { orderUseCases: { addOrderUseCase } } } = dependencies;

	return async (req, res, next) => {
		try {
			const { userId, productsIds, date, isPayed, metaData } = req.body;
            
			const addOrder = addOrderUseCase(dependencies);
			const response = addOrder.execute({
				userId,
				productsIds,
				date,
				isPayed,
				metaData,
			});

            res.json(new Response({
                status: true,
                content: response
            }))

			next();
		} catch (error) {
			next(error);
		}
	};
};
