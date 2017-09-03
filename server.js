'use strict'
 
var express = require('express');
var path = require('path');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')))


app.get('/',function(req,res){
    res.sendFile('main.html',{'root':__dirname + '/public'});
})


app.listen('3000',function(){
    console.log('Server running at http://localhost:3000 !!')
})