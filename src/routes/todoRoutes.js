// src/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const getAllTodos = require('../services/getAllTodosService');
const getTodoById = require('../services/getTodoByIdService');
const createTodo = require('../services/createTodoService');
const updateTodo = require('../services/updateTodoService');
const deleteTodo = require('../services/deleteTodoService');

// Get all todos
router.get('/', (req, res) => {
    res.json(getAllTodos());
});

// Get a specific todo
router.get('/:id', (req, res) => {
    const todo = getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
});

// Create a new todo
router.post('/', (req, res) => {
    const todo = createTodo(req.body);
    res.status(201).json(todo);
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const deletedTodo = deleteTodo(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
});

module.exports = router;
