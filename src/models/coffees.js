const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    size: {
        type: String,
        require: true 
    }

});

//exporting data of the model of one coffee
module.exports = mongoose.model('Coffee', coffeeSchema);