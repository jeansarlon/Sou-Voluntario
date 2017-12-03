var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');
var service = {};

var utils = require('../utils/utils');


service.create = function(newOrg, callback){
    newOrg.contact = JSON.parse(newOrg.contact);
    newOrg.address = JSON.parse(newOrg.address);
    newOrg.type = 0;
    Organization.create(newOrg)
    .then( data => callback(true, data))
    .catch(err => {
        if (err.code = 11000) {
            var key = utils.getKeyError(err.errmsg)
            return callback(false, { status: 11000, key: key, message: key +' Já Cadastrado!' });
        }
        callback(false, err)
    });
}



service.update = function(id, newdata, callback){
    if (newdata._id)
    delete newdata._id;
    
    Organization.findOneAndUpdate(
        {_id: id},
        { $set: newdata },
        { new: true }
    )
    .exec()
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.showAll = function(page, limit, callback){
    Organization.paginate({}, { page: page, limit: 10 })
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
} 



service.show = function(id, callback){
    Organization.findOne({_id: id}, {__v:0 })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.delete = function(id, callback){
    Organization.findOneAndRemove({_id: id}, {__v:0})
    .exec()
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.search = function(query, callback){
    Organization.paginate(
        {$or: [
            {name:new RegExp(query.arg.toLowerCase(), 'i')},
            {site: new RegExp(query.arg.toLowerCase(), 'i')},
            {responsible: new RegExp(query.arg.toLowerCase(), 'i')},
            {'address.city': new RegExp(query.arg.toLowerCase(), 'i')},
            {mission: {$in: [new RegExp(query.arg.toLowerCase(), 'i')]}}
        ]}, { page: query.page, limit: 10
    })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.updatePhoto = function(id, photo, callback){
    Organization.findOneAndUpdate(
        {_id: id},
        { $set: { photo: photo } },
        { new: true }
    )
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



module.exports = service;
