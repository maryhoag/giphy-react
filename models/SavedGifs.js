var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GifSchema = new Schema({

	gifUrl: String,
	date: String
});

module.exports = mongoose.schema('Gif', GifSchema);