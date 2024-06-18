const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name cannot be empty"]
    },
    number:{
        type:String,
        required:[true, "phone cannot be empty"]
    },
    gender:{
        type:String,
        required:[true, "gender cannot be empty"]
    },
    email:{
        type:String,
        required:[true, "email cannot be empty"]
    }
},{timestamps: true})

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;