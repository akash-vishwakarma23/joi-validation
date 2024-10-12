const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect("mongodb://127.0.0.1:27017/joitesting");

const userSchema = mongoose.Schema({
    username: {
        type:'string',
        required: true,
        min: 3,  
    },
    name: {
        type: 'string',
        required: true,
        minlength: 3,
    },
    email: {
        type: 'string',
        required: true,
        
    },
    age: {
        type: 'number',
        required: true,
        min : 18,
    },
    contact: {
        type:'number',
        required: true,
        
    }
})

function validateModel(data){
   let schema =  Joi.object({
        username: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        age: Joi.number().min(18).required(),
        contact: Joi.number().required()
    })
    let {error} = schema.validate(data);
    return error;
}
let userModel = mongoose.model('user', userSchema);
 module.exports = {validateModel, userModel};