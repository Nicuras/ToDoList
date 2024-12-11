//Installing express.js right here
const express = require('express');
const body_parser = require('body-parser');
const userrouter = require('./Routers/user.router');
const Todorouter = require('./Routers/todo.router')

//making use of const variable to import our express model. 
const app = express(); 

app.use(body_parser.json());

app.use('/',userrouter)
app.use('/',Todorouter)

module.exports = app; //doing this so i can make use of our app.js anyone inside our project. 

