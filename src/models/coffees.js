const mongoose = require('mongoose');
//const { Schema, model} = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    status: {
        type: Boolean,
        default: false,
        require: true
    }

}, {
    collection: 'coffees',
    versionKey: false //here to avoid  __v: 0 
});

//exporting data of the model of one coffee and the schema
module.exports = mongoose.model('coffees', coffeeSchema);

//this was another schema
    // name: {
    //     type: String,
    //     require: true
    // },
    // price: {
    //     type: Number,
    //     require: true
    // },
    // size: {
    //     type: String,
    //     require: true 
    // }
    //});