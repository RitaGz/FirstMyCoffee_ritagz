const express = require('express');
const coffeeSchema = require ('../models/coffees');
const coffees = require('../models/coffees');

const router = express.Router();

//create a request
router.get('/', (req, res) => {
    res.render('index'); // redirect and get index.ejs to show me the html on the browser
});

//name of the database is coffees
// router.post('/coffee', (req, res) => {
//     //this creates a coffee with the structure i gave in folder models/coffees
//     const coffee = coffeeSchema(req.body); 
//     coffee
//     .save(coffeeSchema) //i save it in the database
//     .then((data) => res.json(data)) //if everuthing goes fine, response with the data
//     .catch((error) => res.json({message: error}));
// });

router.post('/add', async (req, res) => {
    const newCoffee = new coffees({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price
    });
    await newCoffee.save(coffeeSchema);
    res.send('Received');
    //this route make the browser sends to the server a request and i get the received message back

    //to see the database in console...
    console.log(newCoffee);
    console.log(req.body);
});

module.exports = router;
