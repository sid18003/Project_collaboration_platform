const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role,skills } = req.body;

        // Check if the user already exists
        const isPresent = await User.findOne({ email });
        if (isPresent) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            skills
        });

        const savedUser = await user.save();
        res.status(201).json({
            success: true,
            user: savedUser,
            message: "User created successfully",
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while creating the user",
            error: err.message,
        });
    }
};
exports.userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing, enter both email and password",
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not registered",
            });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password:', password);
        console.log('Stored Hash:', user.password);
        console.log('Is Password Valid:', isPasswordValid);

        if (!isPasswordValid) { // Corrected from if (isPasswordValid)
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }

        // Generate token
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        user.token = token;
        user.password = undefined; // Do not send the password in the response

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Set cookie to expire in 3 days
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        // Send response
        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "User logged in successfully",
        });

    } catch (err) {
        console.error("Login Error: ", err);
        return res.status(500).json({
            success: false,
            message: "Error while logging in",
            error: err.message,
        });
    }
};

exports.updateProfile = async (req,res) =>{
    try{
     const {name,email,skills}=req.body;

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"error while updating the profile"
        })
    }
}