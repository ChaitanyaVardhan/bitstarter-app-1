var express = require('express');

var app = express();

var port = process.env.port || 8080;

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
    console.log('Listening on ' + port);
});
