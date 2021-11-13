const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config(); // i have access to variables de ambiente customized by me

const app = express();
//const expressLayouts = require ('express-ejs-layouts'); //mmmmmmmm

//importing routes, all the routes of index, create,edit delete or update are going to be called here
const indexRoutes = require('./routes/index');

//settings of the port
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //it tells the server where is the views folder
app.set('view engine', 'ejs'); //it says all the files will end with ejs
//app.set('layout', 'layouts/layout'); //mmmmmm
//app.use(expressLayouts)


app.use(express.static('public'));
//app.use(express.static(__dirname + 'public')); //static files
app.use(express.static(path.join(__dirname, 'public')));


//middlewares, they process data before they get to the routes

app.use('/api', indexRoutes);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); //or true
//app.use(bodyParser.urlencoded({extended: false}));


//routes
app.use('/', indexRoutes);
app.get("/", (req, res) => {
    res.send("welcome to my API"); //it will tell this message on the server
});

//connecting to db
mongoose
.connect(process.env.MONGODB_URI) //here should be the key from mongo
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

 //.then(db => console.log('Db connected'))
 //.catch(err => console.log(err));
//starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
