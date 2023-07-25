const mongoose = require("mongoose");

const dbConfig = require('../config/db.config')

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// import all modles here
db.users = require('./user.model');
db.posts = require('./post.model');

module.exports = db;