const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    adId: {type: String, required: true},
    userId: {type: String, required: true},
});

const Likes = mongoose.model('Likes', schema);

module.exports = Likes;