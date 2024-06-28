const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'hostserver', // z.B. sql123.example.com
    user: 'user',
    password: 'dbpw',
    database: 'dbname'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL verbunden');
});

module.exports = db;
