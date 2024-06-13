const {
	getAllTodos,
	getTodoById,
	addTodo,
	updateTodo,
	deleteTodo,
} = require("../../../src/storage/todoStorage");

describe("Todo Storage", () => {
	let todoId;

	it("should add a new todo", () => {
		const todo = addTodo({
			title: "Test title",
			description: "Test description",
		});
		todoId = todo.id;

		expect(todo).toHaveProperty("id");
		expect(todo).toHaveProperty("title", "Test title");
		expect(todo).toHaveProperty("description", "Test description");
		expect(todo).toHaveProperty("completed", false);
		expect(todo).toHaveProperty("created_at");
	});

	it("should get all todos", () => {
		const todos = getAllTodos();
		expect(Array.isArray(todos)).toBeTruthy();
		expect(todos.length).toBeGreaterThan(0);
	});

	it("should get a todo by ID", () => {
		const todo = getTodoById(todoId);
		expect(todo).toHaveProperty("id", todoId);
	});

	it("should update a todo by ID", () => {
		const updatedTodo = updateTodo(todoId, {
			title: "Updated title",
			description: "Updated description",
			completed: true,
		});
		expect(updatedTodo).toHaveProperty("title", "Updated title");
		expect(updatedTodo).toHaveProperty("description", "Updated description");
		expect(updatedTodo).toHaveProperty("completed", true);
	});

	it("should delete a todo by ID", () => {
		const deletedTodo = deleteTodo(todoId);
		expect(deletedTodo).toHaveProperty("id", todoId);
	});
});
