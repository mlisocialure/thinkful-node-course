var express = require('express');

var Storage = function() {
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    return item;
};

var storage = new Storage();
storage.add('Welcome to Marquee!');


var app = express();
app.use(express.static('public'));

app.get('/items', function(request, response) {
    response.json(storage.items);
});
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.post('/items', jsonParser, function(request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }
    var item = storage.add(request.body.name);
    response.status(201).json(item);
});

app.put('/items/:id', jsonParser, function(req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }
  var item = storage.put(req.params.id, req.body.name);
  res.status(201).json(item);
});


app.delete('/items/:id', function(req, res) {
  var item = storage.remove(req.params.id);
  if (item) {
    res.status(201).json(item);
  } else {
    res.status(400).json({"error": "no item found"});
  }
});


app.listen(process.env.PORT || 8080);

exports.app = app;
exports.storage = storage;