var mongoose = require('mongoose');
var Voluntary = mongoose.model('Voluntary');
var service = {};

var utils = require('../utils/utils');

service.create = function(newVol, callback){
    newVol.contact = JSON.parse(newVol.contact);
    newVol.address = JSON.parse(newVol.address);
    newVol.type = 1;
    Voluntary.create(newVol)
    .then( data => callback(true, data))
    .catch(err => {
        if (err.code = 11000) {
            var key = utils.getKeyError(err.errmsg)
            return callback(false, { status: 11000, key: key, message: key +' Já Cadastrado!' });
        }
        callback(false, err);
    });
}



service.delete = function(id, callback){
    Voluntary.findOneAndRemove({_id: id}, {__v:0})
    .exec()
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.update = function(id, newVol, callback){
    if (newVol._id)
    delete newVol._id;
    
    Voluntary.findOneAndUpdate(
        {_id: id},
        { $set: newVol },
        { new: true }
    )
    .exec()
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.showAll = function(page, limit, callback){
    Voluntary.find({}, {__v:0 })
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
} 



service.show = function(id, callback){
    Voluntary.findOne({_id: id}, {__v:0 })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.updatePhoto = function(id, photo, callback){
    Voluntary.findOneAndUpdate(
        {_id: id},
        { $set: { photo: photo } },
        { new: true }
    )
    .exec()
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}




module.exports = service;