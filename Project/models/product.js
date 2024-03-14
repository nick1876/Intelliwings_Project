const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactname:{
        type:String,
        required:true,
        trim: true
    },
    phoneno:{
        type:Number,
        required:true,
        min:0
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    imageurl:{
        type:String,
        required:true,
    }
});

const Contact = mongoose.model('Product',contactSchema);

module.exports=Contact;