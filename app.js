var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function(req, res){
   res.send({
      message: "hello word",
      data: process.env.name
   })
});

app.listen(3000);