// src/storage/todoStorage.js
const { v4: uuidv4 } = require('uuid');

let todos = [];

const getAllTodos = () => todos;

const getTodoById = (id) => todos.find(t => t.id === id);

const addTodo = (data) => {
    const todo = { id: uuidv4(), title: data.title, description: data.description, completed: false, created_at: new Date() };
    todos.push(todo);
    return todo;
};

const updateTodo = (id, data) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return null;

    todos[index] = { ...todos[index], ...data };
    return todos[index];
};

const deleteTodo = (id) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return null;

    const [deletedTodo] = todos.splice(index, 1);
    return deletedTodo;
};

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
};
