var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ldv1oypwmi66apm7",
  password: "hhnpxhe6cmhw7brl",
  database: "ddktpiohuyy8ljpo"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;