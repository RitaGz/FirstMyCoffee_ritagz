const express = require('express');
//const coffees = require('../models/coffees');
const coffeeSchema = require('../models/coffees');

const router = express.Router();

//create a coffee
router.post('/cafes', (req, res) => {
    //this creates a coffee with the structure i gave in folder models/coffees
    const coffee = coffeeSchema(req.body);
    coffee
    .save() //i save it in the database
    .then((data) => res.json(data)) //if everuthing goes fine, response with the data
    .catch((error) => res.json({message: error}));
    
});

module.exports = router;
