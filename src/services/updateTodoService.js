// src/services/updateTodoService.js
const todoStorage = require('../storage/todoStorage');

const updateTodo = (id, data) => {
    return todoStorage.updateTodo(id, data);
};

module.exports = updateTodo;
