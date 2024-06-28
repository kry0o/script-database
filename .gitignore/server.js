const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'sql204.infinityfree.com', // z.B. sql123.example.com
    user: 'if0_36803916',
    password: 'p0oSLfocyMXc',
    database: 'if0_36803916_scriptdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL verbunden');
});

module.exports = db;
