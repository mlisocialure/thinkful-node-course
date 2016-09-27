$(document).ready(function() {
	var socket = io();
	var input = $('input');
	var messages = $('#messages');
	var userlist = $('#userlist');

	var userName = prompt('What is your name?') || 'Anonymous User';

	var addMessage = function (message) {
		messages.append('<div>' + message + '</div>');
	};

	var addUser = function (user) {
		userlist.append('<div>' + user + '</div>');
	};

	var getUsers = function (users) {
		userlist.empty();
		users.forEach(function(user){
			addUser(user);
		});
	};

	socket.emit('login', userName);

	input.on('keydown', function(event) {
		if (event.keyCode != 13) {
			return;
		}

		var message = userName + ': ' + input.val();
		addMessage(message);
		socket.emit('message', message);
		input.val('');
	});

	socket.on('message', addMessage);
	socket.on('new user', addUser);
	socket.on('get users', getUsers);
});
