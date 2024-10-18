const Db = require('../Config/Db');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema ({
    email:{
        type:String,
        lowercase:true,
        required: true,
        unique:   true
    },
    password:{
        type:String,
        required: true,

    }
});

UserSchema.pre('save',async function(){
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);

        user.password = hashpass;

    } catch (err) {
        throw err;
    }
});

UserSchema.methods.comparePassword = async function(userPassword){
    try{
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    }catch (error) {
    throw error;
    }

}

const UserModel = Db.model('User', UserSchema);
module.exports = UserModel; 




