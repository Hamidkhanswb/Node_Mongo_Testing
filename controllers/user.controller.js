const { StatusCodes } = require('http-status-codes');
const userService = require('../services/user.service');

async function signup(req, res, next) {
    try {
        const user = await userService.signup(req?.body)
        res.send({
            message: user,
            statusCode: StatusCodes.CREATED
        })
    }
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error?.message)
    }
};

async function login(req, res, next) {

};

async function getUser(req, res, next) {

};

async function getAllUsers(req, res, next) {

};

async function updateUser(req, res, next) {

};

async function deleteUser(req, res, next) {

};

module.exports = { signup, login, getUser, getAllUsers, updateUser, deleteUser }
