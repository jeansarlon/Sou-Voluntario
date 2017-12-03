var mongoose = require('mongoose');
const urlDB = 'mongodb://localhost/DBSouVoluntario';
mongoose.Promise = global.Promise;
mongoose.connect(urlDB,{useMongoClient:true});
mongoose.connection.on('connected',function (){
    console.log('Mongoose conectado a' + urlDB);
});
mongoose.connection.on('error', function(erro){
    console.log('Mongoose erro de conexão: ' + erro);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose desconectado');
});
require('./models/Organization');
require('./models/Voluntary');
require('./models/Opportunity');