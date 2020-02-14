'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://nachetons:SomosBasura123@cluster0-2wifb.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser:true,
	useUnifiedTopology: true 
});

module.exports = mongoose.model('user', userSchema);        