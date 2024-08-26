const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        // console.log("Body:", req.body);
        console.log("Authorization Header:", req.header("Authorization"));
        
        const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token Missing',
            });
        }

        // Verify the token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while verifying the token',
            error: error.message,
        });
    }
};

exports.isTeacher = (req, res, next) => {
    try {
        if (req.user.role !== "teacher") {
            return res.status(403).json({
                success: false,
                message: "Protected route for teachers only",
            });
        }
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching the role",
        });
    }
};
