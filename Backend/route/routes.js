const express = require('express');
const router = express.Router();

const { registerUser, userlogin } = require('../controller/userController');
const { allStudents } = require("../controller/seeallstudents");
const { isTeacher, auth } = require('../middlewares/auth');
const {addopenprojects} = require('../controller/addproject/addproject');
const { see_open_projects } = require('../controller/seeOpenProjects');
router.post('/user/create', registerUser);
router.post('/user/login', userlogin);
router.get('/user/see', allStudents);
router.get('/user/allStudents', auth, isTeacher, allStudents,(req, res) => {
    return res.json({
        success: true,
        message: 'Welcome to the Protected route for Teachers',
        data:allStudents
    });
});
router.post('/user/listproject',auth,addopenprojects,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"OK , see visible or not ",
    })
});

router.get('/user/see_open_projects',auth,see_open_projects,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"OK , list loading ",
    })
})

module.exports = router;
