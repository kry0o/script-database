const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'sqlserver', // z.B. sql123.example.com
    user: 'sqluser',
    password: 'sqlpw',
    database: 'sqldbname'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL verbunden');
});

module.exports = db;
