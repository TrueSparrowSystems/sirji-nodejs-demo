// src/services/createTodoService.js
const todoStorage = require('../storage/todoStorage');

const createTodo = (data) => {
    return todoStorage.addTodo(data);
};

module.exports = createTodo;
