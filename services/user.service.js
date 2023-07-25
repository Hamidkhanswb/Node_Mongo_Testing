const db = require('../models/index')

const User = db.users

module.exports = {
    signup: async function(dto){
        const user = new User(dto);
        return await user.save()
    },

    login: async function(){

    },

    getUser: async function(){

    },

    getAllUser: async function(){

    },
};