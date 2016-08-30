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

app.delete('/items/:id', function(request, response){
  if (!request.body) {
     response.sendStatus(400);
   } else {
     var item = storage.remove(request.params.id);
     if (item) {
       response.status(200).json(item);
     } else {
       response.sendStatus(404);
    }
   }
  });
        

 app.put('/items/:id', jsonParser, function(request, response){
   var item = storage.update(request.params.id, request.body);
   if (item) {
     response.status(200).json(item);
   } else {
     response.sendStatus(404);
   }
    });
     

export.app=app;
export.storage=storage;


app.listen(process.env.PORT || 8080, process.env.IP);