const createTodo = require("../../../src/services/createTodoService");
const todoStorage = require("../../../src/storage/todoStorage");

jest.mock("../../../src/storage/todoStorage");

describe("Create Todo Service", () => {
	it("should create a new todo", () => {
		const newTodo = {
			id: "1",
			title: "Test title",
			description: "Test description",
		};
		todoStorage.addTodo.mockReturnValue(newTodo);
		const result = createTodo({
			title: "Test title",
			description: "Test description",
		});

		expect(result).toEqual(newTodo);
		expect(todoStorage.addTodo).toHaveBeenCalledWith({
			title: "Test title",
			description: "Test description",
		});
	});
});
