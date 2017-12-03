var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var organizationSchema = new mongoose.Schema({
    type: Number,
    name : {type:String, required:true, maxlength:50},
    email : {type:String, required: true, unique: true, maxlength:50},
    password: {type: String, required: true, maxlength:50},
    photo: String,
    site: String,
    CNPJ: {type: String, unique: true},
    mission: String,
    responsible: String,
    createdAt : {type: Date, default: Date.now},
    
    address: {
        CEP: String,
        city: String,
        district: String,
        state: String,
        street: String,
        number: String,
        complement: String
     },

    contact: {
        phone: String,
        cellPhone: String
    }
});
organizationSchema.plugin(mongoosePaginate);
mongoose.model('Organization', organizationSchema, 'Organizations');
