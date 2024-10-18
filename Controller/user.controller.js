const UserService = require('../Services/user.services');
const userservice = require('../Services/user.services');


exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const SuccessRes = await userservice.registerUser(email,password);

        res.json({status:true,success:"User registered succesfully"})
    }  catch (err) {
        throw err
    }
}


exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        
        const user = await UserService.checkuser(email);
        if(!user){
            throw new error('User does not exist');
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch === false){
            throw new Error('Email or password incorrect.');
        }

        let tokenData = {_id:user._id,email:user.email};

        const token = await UserService.generateToken(tokenData,"secretKey",'1h')

        res.status(200).json({status:true,token:token})



    }  catch (err) {
        throw err
    }
}