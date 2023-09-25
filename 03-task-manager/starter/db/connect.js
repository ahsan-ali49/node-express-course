const mongoose = require("mongoose");

// const connectionString = "";

const connectDB = (url)=>{
    return mongoose.connect(url)
        .then(()=>{console.log("Connection established")})
        .catch((err)=>console.log(err));
}

module.exports = connectDB;
