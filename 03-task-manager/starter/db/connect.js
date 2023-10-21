const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectionString = ""

const connectDB = (url)=>{
    return mongoose.connect(url, /*{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
    }*/)
    .then(()=>console.log("CONNECTED TO THE DB..."))
    .catch((err)=> console.log(`Some error: ${err.message}`));
}

module.exports = connectDB;
