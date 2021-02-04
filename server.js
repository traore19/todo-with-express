const express = require('express');
const app =express();
const exphbs = require('express-handlebars');
const todoRoute = require("./routes/todosRoute");
const bodyParser = require( "body-parser");

const mongoose = require('mongoose');

const PORT =4500;

// pour connecter notre todo a la base de donnee mongoose

mongoose.connect('mongodb://localhost/FadiTodo', {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=> console.log('MongoBB connected'))
.catch((err) => console.log(err));

// body-parse

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// handlebars

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use("/todos",todoRoute)

app.listen(PORT, ()=>{
    console.log('app is runing on port 4500');
})
app.get("/", (req,res)=>{
    let title= "flash"
    res.render("index",{
        title
    })
})