var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "postgres",
    password: "@joeytech900"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});