const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    Name: String,
    Size: String,
    Price: Number,
    status: {
        type: Boolean,
        default: false,
    }
}, {
    collection: 'coffees',
    versionKey: false // a piece of code here to avoid  __v: 0 next to the data
});

//exporting data of the model of one coffee and the schema
module.exports = mongoose.model('coffees', coffeeSchema);
