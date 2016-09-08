var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    }

});

var User = mongoose.model('user', UserSchema);
module.export = User;

curl -X POST -H "Content-Type: application/json" -d 
'{"username": "bknowles", "password": "uhohuhohuhohohnana"}' http://localhost:8080/users