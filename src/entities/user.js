module.exports.User = class User {
	constructor({ id, name = null, lastName = null, gender = genders.NOT_SPECIFIED, metaData = {}}) {

		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.gender = gender;
		this.metaData = metaData;
		
	}
};

const genders = {
	NOT_SPECIFIED: 0,
	FEMALE: 1,
	MALE: 2,
};

module.exports.userConstants = { genders };
