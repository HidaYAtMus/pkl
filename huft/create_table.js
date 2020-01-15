var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testing"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE report (nama_web VARCHAR(50), hasil VARCHAR(50))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});