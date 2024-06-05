// src/services/getTodoByIdService.js
const todoStorage = require('../storage/todoStorage');

const getTodoById = (id) => {
    return todoStorage.getTodoById(id);
};

module.exports = getTodoById;
