const getAllTodos = require("../../../src/services/getAllTodosService");
const todoStorage = require("../../../src/storage/todoStorage");

jest.mock("../../../src/storage/todoStorage");

describe("Get All Todos Service", () => {
	it("should return all todos", () => {
		const todos = [
			{ id: "1", title: "Test title 1", description: "Test description 1" },
			{ id: "2", title: "Test title 2", description: "Test description 2" },
		];

		todoStorage.getAllTodos.mockReturnValue(todos);
		const result = getAllTodos();

		expect(result).toEqual(todos);
		expect(todoStorage.getAllTodos).toHaveBeenCalled();
	});
});
