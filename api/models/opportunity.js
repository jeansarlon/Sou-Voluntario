var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var opportunitySchema = new mongoose.Schema({
    title : {type:String, required:true, maxlength:25},
    description: String,
    period: {
        startDate: {type:Date, required:true},
        endDate: {type: Date, required:true}
    },
    address: {
    	CEP: String,
        city: String,
        district: String,
    	state: String,
    	street: String,
    	number: String,
        complement: String
    },
    photo: String,
    responsible: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization'},
    keyWord: [{type: String}],
    volunteers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Voluntary'}],
    createdAt : {type: Date, default: Date.now},
    evaluations: [{
        comment: {type:String, required:true, maxlength:50},
        stars: {type: Number, required: true, min: 1, max: 5},
        createdAt : {type: Date, default: Date.now},
        voluntary: {type: mongoose.Schema.Types.ObjectId, ref: 'Voluntary', required: true}
    }]
});
opportunitySchema.plugin(mongoosePaginate);
mongoose.model('Opportunity', opportunitySchema, 'Opportunities');