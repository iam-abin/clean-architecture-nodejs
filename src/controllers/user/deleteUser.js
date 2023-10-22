const { Response } = require("../../frameworks/common");

module.exports = (dependencies) => {
	const {
		useCases: {
			userUseCases: { deleteUserUseCase },
		},
	} = dependencies; // deleteUserUseCase is inside userCase/user

	return async (req, res, next) => {
		try {
			const { id, name, lastName, gender, metaData } = req.body;
			const deleteUser = deleteUserUseCase(dependencies);

			const response = await deleteUser.execute({
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
