const mongoose = require("mongoose");

const entityName = "Order"; // representing the name of the collection in our MongoDB database

const {
	schemas: { order: orderSchema },
} = require("../../database/mongo");

// we want to export some closure
const repository = () => {
	const Order = mongoose.model(entityName, orderSchema);

	// CRUD executables
	return {
		add: async (order) => {
			const orderObject = new Order(order);
			return orderObject.save();
		},

		update: async (order) => {
			const { id } = order;
			delete order.id;
			return Order.findByIdAndUpdate(
				id,
				{
					...order,
					updatedAt: new Date(),
				},
				{
					new: true,
				}
			).lean();
		},

		delete: async (order) => {
            const { id } = order;
			delete order.id;
			return Order.findByIdAndUpdate(
				id,
				{
					deletedAt: new Date(),
				},
				{
					new: true,
				}
			).lean();
        },

		getById: async (id) => {
            return Order.findOne({
                _id: id,
                deletedAt:{
                    $exists: false
                }
            })
        },
	};
};

module.exports = repository();
