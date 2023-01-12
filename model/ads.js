const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {type: String, required: true},
    category: {type: String, required: true},
    condition: {type: String, required: true},
    title: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    likes: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    imgSrc: {type: String, required: true},
    address: {type: String, required: true}
});

const Ads = mongoose.model('Ads', schema);

module.exports = Ads;