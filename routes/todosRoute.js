const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Todo' );
const Todo = mongoose.model("todo")
router.get('/', (req,res)=>{
    res.render("home")
})
router.get('/add', (req,res)=>{
    res.render("add")
});

router.post('/add',(req,res) => {
    // console.log(req.body)

    const newTodo ={
        title:req.body.title,
        description: req.body.description
    }
    new Todo(newTodo).save().then((todo) => res.redirect('/todos'));
    console.log(newTodo)
})




module.exports =router