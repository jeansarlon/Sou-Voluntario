var mongoose = require('mongoose');
var Voluntary = mongoose.model('Voluntary');
var Organization = mongoose.model('Organization');


var utils = require('../utils/utils');

module.exports.login = function(req,res){
    console.log('Logando...');
    if(!req.body) {
        console.log('Requisição Inválida');
        utils.sendJSON(res,400,{msg:'Dados inválidos'});
    } else {
        findVoluntary(req,res)
    }
};

var findVoluntary = function(req,res) {
    Voluntary.findOne({
        email: req.body.email,
        password: req.body.password,
    }, function(err,user){
        if(err) {
            console.log(err);
            utils.sendJSON(res,500,err);
        } else if(!user){
            findOrg(req,res)
        } else {
            utils.sendJSON(res, 200, user);
        }
    });
}

var findOrg = function(req,res) {
    Organization.findOne({
        email: req.body.email,
        password: req.body.password,
    }, function(err, user){
        if(err) {
            console.log(err);
            return utils.sendJSON(res,500,err);
        } else if(!user){
            return utils.sendJSON(res, 404, {msg:'Auth error'});
        } else {
            utils.sendJSON(res, 200, user);
        }
    });
}