'use strict';

const path       =require('path')
const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const passport = require('passport');
const nodemailer = require('nodemailer');
const engine = require('ejs-mate');
const mongoose = require('mongoose');
const logger 	   = require('morgan');
const cookieParser 	   = require('cookie-parser');
const session 	   = require('express-session');
const router 	   = express.Router();
const port 	   = process.env.PORT || 3000;



/*mongoose.connect('mongodb://IfpPrueba:<password>@cluster0-shard-00-00-jbpnr.mongodb.net:27017,cluster0-shard-00-01-jbpnr.mongodb.net:27017,cluster0-shard-00-02-jbpnr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true }) //useNewUrlParser para eliminar errores de mongose de versiones recientes
  .then(db => console.log('db connected'))
  .catch(err => console.error(err));*/


app.use(bodyParser.json());
app.use(logger('dev'));


require('./routes')(router);
app.use('/', router);




app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("src"));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));

//app.use(passport.initialize());
app.use(passport.session());
app.listen(port);

console.log(`App Runs on ${port}`);