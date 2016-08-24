var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Happy Birthday Adam Jackson!");
});

app.listen(process.env.PORT, process.env.IP);
