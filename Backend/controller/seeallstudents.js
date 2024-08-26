const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user");
exports.allStudents = async (req,res) =>{
    
    try{
      const students = await User.find({role:"student"});
      //checking the students are present or not 
      if(!students.length){
        return res.status(404).json({
            success:false,
            message:"no data with role student is found"
        })
      }
      // Respond with the list of students
    return  res.status(200).json({
        success: true,
        count: students.length,
        students: students,
    });
    }
    catch(err){
            res.status(500)
            .json({error:"error while fetching the students"});
    }
}