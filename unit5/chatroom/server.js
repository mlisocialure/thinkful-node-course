var socket_io = require('socket.io');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

var users = [];

io.on('connection', function(socket) {
	console.log('Client connected.');

	socket.on('message', function(message) {
		console.log('Message received: ', message);
		socket.broadcast.emit('message', message);
	});

	socket.on('login', function(user) {
		users.push(user);

		socket.emit('get users', users);

		console.log(user + ' just logged in');
		var loginMessage = user + ' just logged in';
		socket.broadcast.emit('message', loginMessage);
		socket.broadcast.emit('new user', user);
		
		socket.on('disconnect', function() {
			users = users.filter(function(name) {
				return name !== user;
			});
			var disconnectMessage = user + ' just logged out.';
			socket.broadcast.emit('message', disconnectMessage);
			socket.broadcast.emit('get users', users);
		});
	});
});


/*
detect if a user is typing

var typing = false;  
var timeout = undefined;

function timeoutFunction() {  
  typing = false;
  socket.emit("typing", false);
}

$("#msg").keypress(function(e){
  if (e.which !== 13) {
    if (typing === false && myRoomID !== null && $("#msg").is(":focus")) {
      typing = true;
      socket.emit("typing", true);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(timeoutFunction, 5000);
    }
  }
});

socket.on("isTyping", function(data) {  
  if (data.isTyping) {
    if ($("#"+data.person+"").length === 0) {
      $("#updates").append("<li id='"+ data.person +"'><span class='text-muted'><small><i class='fa fa-keyboard-o'></i>" + data.person + " is typing.</small></li>");
      timeout = setTimeout(timeoutFunction, 5000);
    }
  } else {
    $("#"+data.person+"").remove();
  }
});

from http://www.tamas.io/further-additions-to-the-node-jssocket-io-chat-app/

*/









app.listen(process.env.PORT || 8080);
