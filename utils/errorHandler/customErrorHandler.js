const { StatusCodes } = require("http-status-codes");

const customErrorHanlder = (err, req, res, next) =>{
    return res.status(StatusCodes.BAD_REQUEST).send({
        message: err?.message,
        statusCode: StatusCodes.BAD_REQUEST
    })
}

module.exports = customErrorHanlder;