// src/services/getAllTodosService.js
const todoStorage = require('../storage/todoStorage');

const getAllTodos = () => {
    return todoStorage.getAllTodos();
};

module.exports = getAllTodos;
