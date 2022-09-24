var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mayur@123!",
    database:"heap"
});

module.exports=con;