const { Response } = require("../../../src/frameworks/common");

module.exports = (dependencies) => {
	const { useCases: { userUseCases: { addUserUseCase } } } = dependencies;  // addUserUseCase is inside userCase/user 

	return async (req, res, next) => {
		try {
			const { id, name, lastName, gender, metaData } = req.body;
			const addUser = addUserUseCase(dependencies);

			const response = await addUser.execute({
				id,
				name,
				lastName,
				gender,
				metaData,
			});

			res.json(new Response({
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
