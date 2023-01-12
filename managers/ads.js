const Ads = require('../model/ads');

const AdsManager = {
    create: async reqBody => {
        let data = new Ads({
            userId: reqBody.userId,
            category: reqBody.category,
            condition: reqBody.condition,
            title: reqBody.title,
            phoneNumber: reqBody.phoneNumber,
            likes: reqBody.likes,
            description: reqBody.description,
            price: reqBody.price,
            imgSrc: reqBody.imgSrc,
            address: reqBody.address
        });

        data = await data.save();
        return data;
    },
    update: async (id,reqBody) => {
        let data = await Ads.findByIdAndUpdate(id, reqBody, {
            new: true
        });
        return data;
    },
    getAll: async() => {
        let data = await Ads.find({});
        return data;
    },
    getById: async id => {
        let data = await Ads.findById(id);
        return data;
    },
    getByUserId: async id => {
        let data = await Ads.find({userId: id});
        return data;
    },
    delete: async id => {
        let data = await Ads.findByIdAndDelete(id);
        return data;
    }
}

module.exports = AdsManager;