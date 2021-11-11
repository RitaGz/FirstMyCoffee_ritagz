const mongoose = require('mongoose');
//const { Schema, model} = require('mongoose');

const coffeeSchema = mongoose.Schema({
//const coffeeSchema = new Schema({
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
// }, {collection:'User',
// versionKey: false //here
// }
// );

//exporting data of the model of one coffee and the
module.exports = mongoose.model('coffees', coffeeSchema);
//module.exports = model('coffees', coffeeSchema);