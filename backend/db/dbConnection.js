const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root1234',
    database: 'om',
    port: 3306
})

mysqlconnection.connect((err) => {
    if(!err) {
        return console.log("Connection established");
    }
    console.log("Connection failed");
})

module.exports = mysqlconnection;