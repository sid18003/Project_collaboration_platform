const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        skills: {
            type: String, // Array of strings to store multiple skills    
            default:"",
        },
    
        role:{
            type:String,
            enum:["student","mentor"],
            default:"student",
        },


    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("User",userSchema);