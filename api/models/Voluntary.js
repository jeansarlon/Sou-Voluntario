var mongoose = require('mongoose');

var voluntarySchema = new mongoose.Schema({
    type: Number,
    CPF: {type: String, required:true, unique: true},
    name : {type:String, required:true, maxlength:50},
    email : {type:String, required: true, unique: true, maxlength:50},
    password: {type: String, required: true, maxlength:50},
    gender: {type: String, enum: ["Masculino", "Feminino"]},
    photo: String,
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
    },

    occupationArea: String,
    availability: String,
    profession: String,
    company: String
});

mongoose.model('Voluntary', voluntarySchema, 'Volunteers');
