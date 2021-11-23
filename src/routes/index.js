const express = require('express');
//const coffeeSchema = require ('../models/coffees');

const aCoffee = require('../models/coffees'); //pasar a coffeeSchema

const router = express.Router();

//create a request
router.get('/', async (req, res) => {
    const coffeeItems = await aCoffee.find();
    console.log(coffeeItems);
    res.render('index', {
        coffeeItems//coffeeItems: coffees
    }); // redirect and get index.ejs to show me the html on the browser
});

router.post('/add', async (req, res) => {
    const coffeeItems = new aCoffee(req.body);
    await coffeeItems.save();
    res.redirect('/'); //res.send('Received');
    //this route make the browser sends to the server a request and i get the received message back
    console.log(coffeeItems);//to see the database down to the console...
    console.log(req.body);
});

//route to indicate that a item changed from one false status black color to a seasonal in green color
router.get('/seasonal/:id', async (req,res) => {
    const { id } = req.params; // i receive the id from the browser
    const coffeeItems = await aCoffee.findById(id); // i find the item and i store in the constant item
    coffeeItems.status = !coffeeItems.status; //if the status was in true, well now will be false.
    await coffeeItems.save();
    console.log(coffeeItems);
    res.redirect('/'); //res.send('received')
});

//route to delete an item from the form and databases
router.get('/delete/:id', async (req,res) => {
    const { id } = req.params;
    await aCoffee.remove({_id: id}); // this line removes the coffe item from the database by _id
    res.redirect('/'); // and i redirect to the main screen again
    // console.log(req.params.id)
    // res.send('received!!');
});

//edit button, find the item to redirect to a secondary form
router.get('/edit/:id', async (req,res) => {
    const { id } = req.params; // i receive the id from the browser
    const coffeeItems = await aCoffee.findById(id);
    res.render('edit', {
        coffeeItems
    });
});

//update one of the items in the secondary form
router.post('/update/:id', async (req,res) => {
    const { id } = req.params;
    await aCoffee.update({ _id: id}, req.body); //it's going to look for the item with that id and then update it
    res.redirect('/');
});

module.exports = router;
