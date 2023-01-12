const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String},
    cellNum: {type: String},
    address: {type: String},
    bio: {type: String},
    date: {type: String},
    img: {type: String}
});

const Users = mongoose.model('Users', schema);

module.exports = Users;