const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017').on('open',()=>{    //connection string
    console.log("MongoDB connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});    //Here im going to set up some test and error handling for when we are connecting to our database. 

module.exports = connection;