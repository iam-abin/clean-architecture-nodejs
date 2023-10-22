const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const { useCases: { userUseCases: { getUserByIdUseCase } } } = dependencies; // getUserByIdUseCase is inside userCases/user

	return async (req, res, next) => {
		try {
			const { id } = req.params;
			const getUserById = getUserByIdUseCase(dependencies);
			const response = await getUserById.execute({ id });

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
