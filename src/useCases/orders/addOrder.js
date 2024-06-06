const { isEmpty } = require("lodash");

const { Order } = require("../../entities");
const { ResponseError } = require("../../frameworks/common");

module.exports = (dependencies) => {

	const {
		ordersRepository,
		useCases: {
			userUseCases: { getUserByIdUseCase },
			productUseCases: { getProductByIdUseCase },
		},
	} = dependencies;

	if (!ordersRepository) {
		throw new Error("orderRepository should be exist in dependencies");
	}

	if (!getUserByIdUseCase) {
		throw new Error("getUserByIdUseCase should be exist in dependencies");
	}

	if (!getProductByIdUseCase) {
		throw new Error("getProductByIdUseCase should be exist in dependencies");
	}

	const getUserById = getUserByIdUseCase(dependencies).execute;
	const getProductById = getProductByIdUseCase(dependencies).execute;

	const getValidationErrors = async ({ order }) => {
		const result = [];

		return result;
	};

	const execute = async ({ userId, productsIds, date, isPayed, metaData }) => {
		const order = new Order({
			userId,
			productsIds,
			date,
			isPayed,
			metaData,
		});

		const validationErrors = await getValidationErrors({ order });

		if (!isEmpty(validationErrors)) {
			return Promise.reject(
				new ResponseError({
					status: 403,
					msg: "Validation Errors",
					reason: "Somebody send bad data",
					validationErrors,
				})
			);
		}

		return ordersRepository.add(order);
	};

	return { execute };
};
