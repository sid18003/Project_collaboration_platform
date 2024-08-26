const express = require("express");
const mongoose = require("mongoose");

const Project = require("../../model/project");

exports.addopenprojects = async (req,res) =>{
    try{
         const {project_name,project_desc,required_skills,collaborators,requesters} = req.body;
         const project = new Project({
            project_name,
            project_desc,
            required_skills,
            collaborators,
            requesters
        });
         const savedProject = await project.save();
         res.status(201).json({
            success: true,
            project:  savedProject,
            message: "Project listed successfully",
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"error while loading the open projects"
        })
    }
}

