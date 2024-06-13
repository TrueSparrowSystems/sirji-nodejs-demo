const deleteTodo = require("../../../src/services/deleteTodoService");
const todoStorage = require("../../../src/storage/todoStorage");

jest.mock("../../../src/storage/todoStorage");

describe("Delete Todo Service", () => {
	it("should delete a todo by ID", () => {
		const deletedTodo = {
			id: "1",
			title: "Test title",
			description: "Test description",
		};
		todoStorage.deleteTodo.mockReturnValue(deletedTodo);
		const result = deleteTodo("1");

		expect(result).toEqual(deletedTodo);
		expect(todoStorage.deleteTodo).toHaveBeenCalledWith("1");
	});

	it("should return null if todo not found", () => {
		todoStorage.deleteTodo.mockReturnValue(null);
		const result = deleteTodo("2");

		expect(result).toBeNull();
		expect(todoStorage.deleteTodo).toHaveBeenCalledWith("2");
	});
});
