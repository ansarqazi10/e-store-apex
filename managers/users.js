
const Users = require('../model/users');

const UsersManager = {
    create: async reqBody => {
        let data = new Users(reqBody);
        data = await data.save();
        return data;
    },
    update: async (id,reqBody) => {
        let data = await Users.findByIdAndUpdate(id, reqBody, {
            new: true
        });
        return data;
    },
    getAll: async() => {
        let data = await Users.find({});
        return data;
    },
    getById: async id => {
        let data = await Users.findById(id);
        return data;
    },
    getByEmailAndPassword: async (reqBody) => {
        let data = await Users.findOne({email: reqBody.email, password: reqBody.password});
        return data;
    },
    getByEmail: async (reqBody) => {
        let data = await Users.findOne({email: reqBody.email});
        return data;
    },
    delete: async id => {
        let data = await Users.findByIdAndDelete(id);
        return data;
    },
    deleteByEmailAndPassword: async body => {
        let data = await Users.deleteOne({email: body.email, password: body.password});
        return data;
    }
}

module.exports = UsersManager;