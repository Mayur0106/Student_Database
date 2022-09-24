
var con=require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/',function(req,res)
{
        var name = req.body.name;
        var age = req.body.age;
        var gender = req.body.gender;
        var mail = req.body.mail;

        con.connect(function(error){

            if(error) throw error;

            var sql = "INSERT INTO customer(name,age,gender,mail) VALUES('"+name+"','"+age+"','"+gender+"','"+mail+"')";

            con.query(sql,function (error ,result) {
                if(error) throw error;  
                res.send("Register successfully"+result.insertId);
            });

        });
});
app.listen(7000);