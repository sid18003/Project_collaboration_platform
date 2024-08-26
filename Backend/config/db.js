// database connection
const mongoose = require("mongoose");

require("dotenv").config();

const url = process.env.url;

const dbconnect = () =>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connected Successfully");
    })
    .catch((err)=>{
        console.log("Error while connecting the database");
        process.exit(1);
    })
    
}

module.exports = dbconnect;