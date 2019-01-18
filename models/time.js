var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const Time = new Schema({
    ID: Number,
    DATA: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Time', Time);