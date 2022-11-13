const mysql = require('mysql');

const db_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    //  host:'localhost',
    //  user:'root',
    //  password:'',
    //  database: 'applocation'
};

var db;

module.exports = mysql.createConnection(db_config);