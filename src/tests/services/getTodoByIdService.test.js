const getTodoById = require("../../../src/services/getTodoByIdService");
const todoStorage = require("../../../src/storage/todoStorage");

jest.mock("../../../src/storage/todoStorage");

describe("Get Todo By ID Service", () => {
	it("should return a todo by ID", () => {
		const todo = {
			id: "1",
			title: "Test title",
			description: "Test description",
		};
		todoStorage.getTodoById.mockReturnValue(todo);
		const result = getTodoById("1");

		expect(result).toEqual(todo);
		expect(todoStorage.getTodoById).toHaveBeenCalledWith("1");
	});

	it("should return null if todo not found", () => {
		todoStorage.getTodoById.mockReturnValue(null);
		const result = getTodoById("2");

		expect(result).toBeNull();
		expect(todoStorage.getTodoById).toHaveBeenCalledWith("2");
	});
});
