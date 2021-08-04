const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app= express();
const path = require('path');
const connectDB = require('./server/database/connection')
// setup de doc file config -> port
dotenv.config({path : 'config.env'});

const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

// mongoDB connection 

connectDB();

// parse request to body-parser phan giai yeu cau tu nguoi dung gui len
app.use(bodyparser.urlencoded({extended : true}));

//set view engine tra ve cho nguoi dung
app.set("view engine", "ejs");
//app.set("view", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));

//load router

app.use('/', require('./server/routes/router'))


// chay localhost
app.listen(PORT,()=> {console.log(`Server is running on http://localhost:${PORT}`)});