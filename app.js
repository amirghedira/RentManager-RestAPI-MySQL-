const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/database');
const carRoutes = require('./routes/car');
const userRoutes = require('./routes/user');
const rentRoutes = require('./routes/rent')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("uploads/"));
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    next();
});


db.connect(function (err) {
    if (err) {
        console.log("error when connecting to db:", err);
    }
});

app.use('/car', carRoutes);
app.use('/rent', rentRoutes);
app.use('/user', userRoutes)


module.exports = app;
