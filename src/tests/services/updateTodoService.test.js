const updateTodo = require("../../../src/services/updateTodoService");
const todoStorage = require("../../../src/storage/todoStorage");

jest.mock("../../../src/storage/todoStorage");

describe("Update Todo Service", () => {
	it("should update a todo by ID", () => {
		const updatedTodo = {
			id: "1",
			title: "Updated title",
			description: "Updated description",
			completed: true,
		};
		todoStorage.updateTodo.mockReturnValue(updatedTodo);
		const result = updateTodo("1", {
			title: "Updated title",
			description: "Updated description",
			completed: true,
		});

		expect(result).toEqual(updatedTodo);
		expect(todoStorage.updateTodo).toHaveBeenCalledWith("1", {
			title: "Updated title",
			description: "Updated description",
			completed: true,
		});
	});

	it("should return null if todo not found", () => {
		todoStorage.updateTodo.mockReturnValue(null);
		const result = updateTodo("2", {
			title: "Updated title",
			description: "Updated description",
			completed: true,
		});

		expect(result).toBeNull();
		expect(todoStorage.updateTodo).toHaveBeenCalledWith("2", {
			title: "Updated title",
			description: "Updated description",
			completed: true,
		});
	});
});
