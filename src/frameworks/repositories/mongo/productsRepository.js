const mongoose = require("mongoose");

const entityName = "Product"; // representing the name of the collection in our MongoDB database

const {
	schemas: { product: productSchema },
} = require("../../database/mongo");

// we want to export some closure
const repository = () => {
    // create a model for MongoDB collection .
	// Product model that you can use to interact with the "Product" collection in our MongoDB database.
	const Product = mongoose.model(entityName, productSchema);

	// CRUD executables
	return {
		add: async (product) => {
			const productObject = new Product(product);
			return productObject.save();
		},

		update: async (product) => {
			const { id } = product;
			delete product.id;
			return Product.findByIdAndUpdate(
				id,
				{
					...product,
					updatedAt: new Date(),
				},
				{
					new: true,
				}
			).lean();
		},

		delete: async (product) => {
            const { id } = product;
			delete product.id;
			return Product.findByIdAndUpdate(
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
            return Product.findOne({
                _id: id,
                deletedAt:{
                    $exists: false
                }
            })
        },
	};
};

module.exports = repository();
