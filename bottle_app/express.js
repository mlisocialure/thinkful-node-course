var express = require('express');

var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post("/userlogin", function(request, response) {
    response.send( "Hello " + request.body.message );
        });

app.listen(process.env.PORT || 8080, process.env.IP);
