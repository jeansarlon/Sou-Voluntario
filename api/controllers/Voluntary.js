var mongoose = require('mongoose');
var Voluntary = mongoose.model('Voluntary');
var VolService = require('../services/Voluntary');
var OppService = require('../services/Opportunity');



var utils = require('../utils/utils');



module.exports.create = function(req,res){
    if(!req.body || !req.file) {
        console.log('sem objeto voluntary');
        return utils.sendJSON(res,400,{ msg:'sem objeto voluntary'});
    }
    req.body.photo = req.file.filename;
    VolService.create(req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}



module.exports.getAll = function (req,res){
    VolService.showAll( req.body.page, 10, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    });
};



module.exports.get = function (req,res){
    VolService.show( req.params._id, (status, data) => {
        if (data.length == 0){
            return utils.sendJSON(res,404,{msg:'recurso vazio'});
        }
        status && data ?
        utils.sendJSON(res, 200, data) :
        utils.sendJSON(res, 500, data);
    })
};



module.exports.getOpportunitiesOfVoluntary = function (req,res){
    OppService.getOpportunitiesOfVoluntary( req.params._id, (status, data) => {
        if (data.length == 0){
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
    
    VolService.delete( req.params._id, (status, data) => {
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
    
    VolService.update( req.params._id, req.body, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    });
};


module.exports.updatePhoto = function(req,res){
    if(!req.file) {
        console.log('sem foto do voluntario');
        return utils.sendJSON(res,400,{ msg:'sem foto do voluntary'});
    }
    VolService.updatePhoto(req.params._id, req.file.filename, (status, data) => {
        status && data ?
        utils.sendJSON(res, 201, data) :
        utils.sendJSON(res, 500, data);
    })
}