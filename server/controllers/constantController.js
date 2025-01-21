const Constant = require('../models/contantModel');

class ConstantService {

    static create (obj) {
        const constant = new Constant(obj);
        return constant.save();
    }

    static update (id, data) {
        return Constant.findById(id)
            .then((constant) => {
                constant.set(data);
                constant.save();
                return constant;
            });
    }

    static read (id) {
        return Constant.findById(id)
            .then((constant) => {
                return constant;
            });
    }

    static list () {
        return Constant.find({})
            .then((constants) => {
                return constants
            })
    }

    static delete (id) {
        return Constant.deleteOne({_id: id})
            .then((constant) => {
                return constant;
            })
    }
}

module.exports.ConstantService = ConstantService