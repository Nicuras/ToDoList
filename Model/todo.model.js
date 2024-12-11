const Db = require('../Config/Db');
const mongoose = require('mongoose');
const UserModel = require('./user.model')
const { Schema } = mongoose;


const todoSchema = new Schema ({
    userId:{
        type: Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true

    }
});


const Todomodel = Db.model('todo', todoSchema);
module.exports = Todomodel; 