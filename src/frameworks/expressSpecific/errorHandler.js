const { Response, ResponseError } = require("../common");

module.exports = (err, req, res, next) => {
	const error = new ResponseError({
		status: err.status || 500,
		msg: err.msg || err.message || "error occured",
		reason: err.reason || err.stack || "something failed",
		url: req.originalUrl,
		ip: req.ip,
		validationErrors: err.validationErrors
	});

    res.status(error.status).json(new Response({
        status: false,
        error
    }))
};
