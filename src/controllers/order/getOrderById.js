const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const { useCases: { orderUseCases: { getOrderByIdUseCase } } } = dependencies;

	return async (req, res, next) => {
		try {
			const { id } = req.params;

			const getOrderById = getOrderByIdUseCase(dependencies);
			const response = getOrderById.execute({ id });

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
