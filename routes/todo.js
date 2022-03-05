const router = require('express').Router()
const todoModel = require('../models/todo');
const todoController = require('../controllers/todo');

// Listening to different urls which is used in the fronend
router.get('/', todoController.getAllTodos);

router.post('/add/todo', todoController.saveTodo)

router.get('/delete/todo/:_id', todoController.deleteTodo)

router.get('/complete/todo/:_id', todoController.updateCompleted)

router.get('/active', todoController.getActiveTodos)

router.get('/completed', todoController.getCompletedTodos)

module.exports = router;