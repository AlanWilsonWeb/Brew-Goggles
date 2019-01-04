var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const Login = new Schema({
    NAME: String,
    ID: String,
    SECRET: String
});


module.exports = mongoose.model('Login', Login);