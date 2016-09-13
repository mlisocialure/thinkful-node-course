var express = require('express');
var jsonParser = require('body-parser').json();


var Storage = {             //creating local database
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  } 
};

var createStorage = function() {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
};

var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.json(storage.items);
});

app.post('/', jsonParser, function(req, res) {
  if (!req.body) {
    return res.sendStatus(400);    
  }
  var item = storage.add(req.body.name);      //adding a new item
  res.status(201).json(item);
});

app.delete('/', function(req, res) {
  var item = storage.remove(req.params.id);   //deleting an item along with its corresponding id
  if (item) {
    res.status(200).json(item);                   
  } else {
    res.status(400).json({"error": "no item found"});
  }
});



app.put('/', jsonParser, function(req, res) {  
  if (!req.body) {
    return res.sendStatus(400);
  }
  var item = storage.put(req.params.id, req.body.name); //updating new item with id
  res.status(200).json(item);
});



app.listen(process.env.PORT || 8080, process.env.IP);


