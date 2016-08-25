var express = require('express');

var app = express();

app.get('/',
    function(request, response) {
    response.send("welcome to Marquee!");
});




app.get('/:greeting/:name', function(request, response) {
    var first = request.params.greeting;
    var last = request.params.name;
    response.send(["<b>Welcome to Marquee!</b>", first, last].join(" "));
});

app.listen(process.env.PORT, process.env.IP);
