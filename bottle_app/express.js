var express = require('express');

var app = express();

app.get('/https://thinkful-ml-mlisocialure.c9users.io/bottle/home.html',
    function(request, response) {
    response.send("welcome to Marquee!");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.listen(process.env.PORT, process.env.IP);
