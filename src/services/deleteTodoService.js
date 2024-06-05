// src/services/deleteTodoService.js
const todoStorage = require('../storage/todoStorage');

const deleteTodo = (id) => {
    return todoStorage.deleteTodo(id);
};

module.exports = deleteTodo;
