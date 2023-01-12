const Likes = require('../model/likes');

const LikesManager = {
    create: async reqBody => {
        data = new Likes(reqBody);
        data = await data.save();
        return data;
    },
    update: async (id,reqBody) => {
        let data = await Likes.findByIdAndUpdate(id, reqBody, {
            new: true
        });
        return data;
    },
    getAll: async() => {
        let data = await Likes.find({});
        return data;
    },
    getById: async id => {
        let data = await Likes.findById(id);
        return data;
    },
    getByAdId: async id => {
        let data = await Likes.findOne({adId: id});
        return data;
    },
    getByUserId: async id => {
        let data = await Likes.find({userId: id});
        return data;
    },
    getByUserAndAdId: async reqBody => {
        let data = await Likes.findOne({adId: reqBody.adId, userId: reqBody.userId});
        return data;
    },
    delete: async id => {
        let data = await Likes.findByIdAndDelete(id);
        return data;
    }
}

module.exports = LikesManager;