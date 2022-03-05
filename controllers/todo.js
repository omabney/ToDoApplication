const { redirect } = require('express/lib/response');
const todoModel = require('../models/todo');

// function to get all Todo from the database
exports.getAllTodos = async(req, res) => {
    todoModel.find()
        .then(allTodos => {
            res.render("index",{todos: allTodos});
        })
}

// function to save a new todo to the database
exports.saveTodo = (req,res) =>{
    const { newtodo } = req.body;
    const todo = new todoModel({todo: newtodo})
    todo.save()
    .then(() =>{
        console.log("Successfully inserted todo list to database!!");
        res.redirect('/');
    })
    .catch((err) => console.log("Error : "+err));
}

//function to delete a todo from the database
exports.deleteTodo = (req, res) => {
    const {_id} = req.params;
    todoModel.deleteOne({_id})
    .then(() =>{
        console.log("Deleted todo Successfully");
        res.redirect('/');
    })
    .catch((err) => console.log(err));
}

// function to update the isCompleted value in the database
exports.updateCompleted = (req, res) => {
    const {_id} = req.params;
    todoModel.findById(_id)
    .then(todo =>{
        if(todo.isCompleted){
            console.log("todo has changed to not completed");
            todo.isCompleted = false;
        }else{
            console.log("todo has completed");
            todo.isCompleted = true;
        }
        
        return todo.save();
    })
    .then((result) =>{
        
        res.redirect('/');
    })
    .catch((err) => console.log(err));
}

//function to get the active todos
exports.getActiveTodos = (req, res) => {
    todoModel.find()
        .then(allTodos => {
            res.render("active",{todos: allTodos});
        })
}

//function to get the completed todos
exports.getCompletedTodos = (req, res) => {
    todoModel.find()
        .then(allTodos => {
            res.render("complete",{todos: allTodos});
        })
}