var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.listen(process.env.PORT, process.env.IP);


// from this section: https://courses.thinkful.com/node-001v4/assignment/2.1.1
//not sure why it is not reading the code from the second app.get, maybe a server issue on c9 end?
