const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config(); // i have access to variables de ambiente customized by me

const app = express();
//const ejs = require('ejs');
//const ejsLint = require('ejs-lint'); //this makes crash the app

//importing routes, all the routes of index, create,edit delete or update are going to be called here
const indexRoutes = require('./routes/index');

//settings of the port
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //it tells the server where is the views folder
app.set('view engine', 'ejs'); //it says all the files will end with ejs

app.use(express.static('public'));
//app.use(express.static(__dirname + 'public')); //static files
app.use(express.static(path.join(__dirname, 'public')));

//middlewares, they process data before it gets to the routes
app.use('/api', indexRoutes);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: false})); // im not sure about this line

//routes
app.use('/', indexRoutes);
app.get("/", (req, res) => {
    res.send("welcome to my API"); //it will tell this message on the server
});

//connecting to db, added this, , {useNewUrlParser: true}
mongoose
.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}) //here should be the key from mongo
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
