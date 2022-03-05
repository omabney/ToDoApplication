const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const todo = require('./routes/todo');

//Connecting to the data base 
mongoose.connect('mongodb://localhost/todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

//Setting up the router
app.use(todo);

// listening to server at port : 3000
app.listen(3000, () => console.log('Application started at port: 3000'));