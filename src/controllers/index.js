const userControllers = require('./user');
const productControllers = require('./product')
const orderControllers = require('./order')

module.exports = { userControllers, productControllers, orderControllers }




// Every controller will have its own file that will handle the user requests and will make responses, 
// but in order to get the responses we will call the relevant use cases, every controller will be connected to the express router.