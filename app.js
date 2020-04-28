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

// app.post("/upload", upload.single("file"), (req, res, next) => {
//     console.log(req.file.filename);
// });
// app.get("/delete/:file", (req, res) => {
//     fs.unlink(`./uploads/${req.params.file}`, function (err) {
//         if (err && err.code == "ENOENT") {
//             // file doens't exist
//             console.log("File doesn't exist, won't remove it.");
//         } else if (err) {
//             // other errors, e.g. maybe we don't have enough permission
//             console.log("Error occurred while trying to remove file");
//         } else {
//             console.log(`removed`);
//         }
//     });
//     res.send("");
// });


module.exports = app;