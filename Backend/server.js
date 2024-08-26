const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require("cors");

const app = express();
const userRoutes = require('./route/routes');
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json()); // Parses JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies

app.use('/api/v1', userRoutes);

// Other configurations...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const dbconnect = require("../Backend/config/db")
dbconnect();