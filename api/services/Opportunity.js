var mongoose = require('mongoose');
var Async = require('async');
var Opportunity = mongoose.model('Opportunity');
var parse = require('../utils/utils');
var Org = require('./Organization');
var Vol = require('./Voluntary');
var service = {}
var propstoJson = ["keyWord", "address","period"];



service.create = function(opportunity, callback){
    var resp = JSON.parse(opportunity.responsible);
    var respID = mongoose.Types.ObjectId(resp._id);
    opportunity.responsible = respID;
    
    
    Opportunity.create(parse.toJson(propstoJson, opportunity))
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        return callback(false, err)
    });
}



service.showAll = function(page, limit, callback){
    Opportunity.paginate({}, 
        { page: page, limit: 10, sort: { 'createdAt': -1 }, populate: ['responsible', 'volunteers', 'evaluations.voluntary'] })
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
} 



service.show = function(id, callback){
    Opportunity.findOne({_id: id}, {__v:0 })
    .populate({
        path:'volunteers',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'responsible',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'evaluations.voluntary',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.search = function(query, callback){
    Opportunity.paginate(
        {$or: [
            {title:new RegExp(query.arg.toLowerCase(), 'i')},
            {description: new RegExp(query.arg.toLowerCase(), 'i')},
            {'address.city': new RegExp(query.arg.toLowerCase(), 'i')},
            {keyWord: {$in: [new RegExp(query.arg.toLowerCase(), 'i')]}}
        ]}
        , { page: query.page, limit: 10, populate: ['responsible', 'volunteers', 'evaluations.voluntary']
    })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.getOpportunitiesOfVoluntary = function(id, callback){
    Opportunity.find({volunteers: {$in: [id]}}, {__v:0 })
    .populate({
        path:'volunteers',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'responsible',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'evaluations.voluntary',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.getOpportunitiesOfOrganization = function(id, callback){
    Opportunity.find({responsible: id}, {__v:0 })
    .populate({
        path:'volunteers',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'responsible',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .populate({
        path:'evaluations.voluntary',
        select: '-__v',
        options: {
            limit: 10,
        }
    })
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.update = function(id, newdata, callback){
    if (newdata._id)
    delete newdata._id;
    
    Opportunity.findOneAndUpdate(
        {_id: id},
        { $set: newdata },
        { multi:true, new: true }
    )
    .exec()
    .then( data => callback(true, data))
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.delete = function(id, callback){
    Opportunity.findOneAndRemove({_id: id}, {__v:0})
    .exec()
    .then( data => callback(true, data) )
    .catch(err => {
        console.log(err);
        callback(false, err)
    });
}



service.insertEvaluation = function(eval, id_opportunity,  cb){
    eval.date = new Date();
    Opportunity.update({ _id: id_opportunity },{ $push: {evaluations: eval } })
    .exec()
    .then( data => cb(true, eval))
    .catch(err => {
        console.log(err);
        cb(false, err)
    });
};



service.insertVoluntary = function(id_opportunity ,voluntary, cb){
    Opportunity.update({ _id: id_opportunity },{$addToSet: { volunteers: voluntary._id } })
    .exec()
    .then( data => cb(true, data))
    .catch(err => {
        console.log(err);
        cb(false, err)
    });
};



service.removeVoluntary = function(id_opportunity ,id_voluntary, cb){
    Opportunity.update({ _id: id_opportunity },{$pull: { volunteers:id_voluntary }})
    .exec()
    .then( data => cb(true, data))
    .catch(err => {
        console.log(err);
        cb(false, err)
    });
};



module.exports = service;

