const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			userUseCases: { updateUserUseCase },
		},
	} = dependencies; // updateUserUseCase is inside userCase/user

	return async (req, res, next) => {
		try {
			const { id, name, lastName, gender, metaData } = req.body;
			const updateUser = updateUserUseCase(dependencies);

			const response = await updateUser.execute({
				user: {
					id,
					name,
					lastName,
					gender,
					metaData,
				}
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
