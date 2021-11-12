const express = require('express');
const coffees = require('../models/coffees');
const coffeeSchema = require('../models/coffees');

const router = express.Router();


//create a request
router.get('/', (req, res) => {
    res.render('index'); // redirect and get index.ejs to show me the html on the browser
});
//name of the database is coffees
router.post('/coffees', (req, res) => {
    //this creates a coffee with the structure i gave in folder models/coffees
    const coffee = coffeeSchema(req.body);
    coffee
    .save() //i save it in the database
    .then((data) => res.json(data)) //if everuthing goes fine, response with the data
    .catch((error) => res.json({message: error}));
    
});

router.post('/add', async (req, res) => {
//the 2 following lines are to show in console the data of a new coffe
    // console.log(new Coffee(req.body));
    // console.log(req.body);
    // const coffees = new Coffee(req.body); //i have a new data
    // //i am gonna save the new data in the database
    // await Coffee.save();
    const newCoffee = new coffees({
        name: req.body.name,
        price: req.body.price,
        size: req.body.size
    });
    await newCoffee.save();
    console.log(newCoffee);
    console.log(req.body);
    res.send('Received');
    //this route make the browser sends to the server a request and i get the received message back
});

module.exports = router;
