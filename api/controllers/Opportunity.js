var mongoose = require('mongoose');
var Async = require('async');
var Opportunity = mongoose.model('Opportunity');
var OppService = require('../services/Opportunity');



var utils = require('../utils/utils');



module.exports.create = function(req,res){
    if(!req.body || !req.file) {
        console.log('Requisição Inválida');
        return utils.sendJSON(res,400,{msg:'Ausencia de objeto Opportunity'});
    }
    req.body.photo = req.file.filename;
    OppService.create(req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}



module.exports.getAll = function (req,res){
    OppService.showAll( req.params.page, 10, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    });
};



module.exports.get = function (req,res){
    OppService.show( req.params._id, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.search = function (req,res){
    OppService.search( req.query,  (status, data) => {
        if (data.docs.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.delete = function(req,res){
    if(!req.params || !req.params._id) {
        console.log('sem código');
        return utils.sendJSON(res,400,{ msg:'sem código'});
    }
    
    OppService.delete( req.params._id, (status, data) => {
        status ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.update = function(req,res){
    if(!req.body || !req.params || !req.params._id){
        console.log('sem código ou sem corpo');
        return utils.sendJSON(res,400,{ msg:'sem código ou sem corpo'});
    }
    
    OppService.update( req.params._id, req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    });
};



module.exports.insertEvaluation = function(req, res) {
   OppService.insertEvaluation(req.body, req.params._id,(status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}



module.exports.insertVoluntary = function(req, res) {
   OppService.insertVoluntary(req.params._id, req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}



module.exports.removeVoluntary = function(req, res) {
   OppService.removeVoluntary(req.params._id, req.params.id_voluntary, (status, data) => {
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
}