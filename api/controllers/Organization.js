var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');


var OrgService = require('../services/Organization');
var OppService = require('../services/Opportunity');

var utils = require('../utils/utils');

var Project = {__v:0,type: 0,name:1,email:1,password:1,photo:1,
    site:1,CNPJ:1,mission:1,responsible:1,address:1,contact:1,
};



module.exports.create = function(req,res){
    console.log('Inserindo Organização');
    if(!req.body || !req.file) {
        console.log('Requisição Inválida');
        return utils.sendJSON(res,400,{msg:'Ausencia de objeto Organization ou aquivo não enviado'});
    }
    req.body.photo = req.file.filename;
    OrgService.create(req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    });
};



module.exports.getAll = function (req,res){
    OrgService.showAll( req.params.page, 10, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    });
};



module.exports.get = function (req,res){
    OrgService.show( req.params._id, (status, data) => {
        if (!data){
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
    
    OrgService.delete( req.params._id, (status, data) => {
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
    
    OrgService.update( req.params._id, req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    });
};


module.exports.search = function (req,res){
    OrgService.search( req.query,  (status, data) => {
        if (data.docs.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.getOpportunitiesOfOrganization = function (req,res){
    OppService.getOpportunitiesOfOrganization( req.params._id, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.updatePhoto = function(req,res){
    if(!req.file) {
        console.log('sem foto da Organização');
        return utils.sendJSON(res,400,{ msg:'sem foto da Organização!'});
    }
    OrgService.updatePhoto(req.params._id, req.file.filename, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}