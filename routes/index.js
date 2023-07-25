const express = require('express');

const handlers = require('../controllers/index');

const router = express.Router();

// main url
router.get('/', (req, res, next) =>{
    res.send("Hello from node_mongo_testing app")
})

// user routes
router.post('/user/signup', handlers.userController.signup)
router.post('/user/login', handlers.userController.login)
router.get('/user/get', handlers.userController.getUser)
router.get('/user/get-all', handlers.userController.getAllUsers)
router.patch('/user/update', handlers.userController.updateUser)
router.patch('/user/delete', handlers.userController.deleteUser)

// post routes


module.exports = router;