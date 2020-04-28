const mysql = require('mysql');

const db_config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

    //  host:'localhost',
    //  user:'root',
    //  password:'',
    //  database: 'applocation'
};

var db;

module.exports = mysql.createConnection(db_config);