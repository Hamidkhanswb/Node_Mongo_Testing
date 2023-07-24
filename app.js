var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function(req, res){
   res.send({
      message: "hello word",
      data: process.env.name
   })
});

app.get('/home', function(req, res){
   res.send({
      message: "hello home screen",
      data: process.env.name
   })
});

app.get('/crash', function(req, res){
   throw new Error("crashed")
});

app.listen(3000);