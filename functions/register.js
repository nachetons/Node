'use strict';

const user = require('../models/user');
const bcrypt = require('bcryptjs');

exports.registerUser = (name, email, password) => 

	new Promise((resolve,reject) => {

	    const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new user({

			name: name,
			email: email,
			hashed_password: hash,
			created_at: new Date()
		});

		newUser.save()

		.then(() => resolve({ status: 201, message: 'User Registered Sucessfully !' }))

		.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {

				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	});


	exports.deleteUser = (name, email, password) => 
{
		
		user.find({ email: email }, { name: 1, email: 1, created_at: 1, _id: 0 })
		user.remove()
		res.redirect('/')
	
		
	};

