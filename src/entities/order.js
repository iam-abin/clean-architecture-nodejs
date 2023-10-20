module.exports.Order = class Order{
    constructor({ id, userId, productsIds = [], date = new Date(), isPayed = false, metaData = {} } = {}){

        this.id = id;
		this.userId = userId;
		this.productsIds = productsIds;
		this.date = date;
		this.isPayed = isPayed;
		this.metaData = metaData;
        
    }
}