const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    project_name:{
        type:String,
        required:true,
    },
    project_desc:{
        type:"String",
        required:true,
    },
    required_skills:{
        type:String,
    },
    collaborators:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    requesters:[{
        type: mongoose.Schema.Types.ObjectId,
        flag:0,
        ref: "User",
    }],
})

module.exports = mongoose.model("Project",projectSchema);