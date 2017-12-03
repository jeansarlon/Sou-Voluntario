var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('./database');
var routerOrganization = require('./routes/Organization');
var routerVoluntary = require('./routes/Voluntary');
var routerOpportunity = require('./routes/Opportunity');
var routerAuth = require('./routes/Auth');
var routerUpload = require('./routes/Upload');

var app = express();
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST', 'DELETE']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers');
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public',express.static(path.join(__dirname, '/public')));
app.use('/public/img',express.static(path.join(__dirname, '/public/uploads')));
app.use('/', routerOrganization, routerVoluntary, routerAuth, routerOpportunity, routerUpload);

var servidor = app.listen(3001,function(){
    console.log('Express disponível em ' + servidor.address().port);
});


