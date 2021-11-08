const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config(); // i have access to variables de ambiente customized by me


const app = express();

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //it tells the server where is the views folder
app.set('view engine', 'ejs');

//middlewares, they process data before they get to the routes
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);
app.get("/", (req, res) => {
    res.send("welcome to my API"); //it will tell this message on the server
});

//connecting to db
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

 //.then(db => console.log('Db connected'))
 //.catch(err => console.log(err));
//starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
