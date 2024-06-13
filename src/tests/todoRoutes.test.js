const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("../routes/todoRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api/todos", todoRoutes);

describe("Todo API", () => {
	let createdTodoId;

	it("should create a new todo", async () => {
		const res = await request(app)
			.post("/api/todos")
			.send({ title: "Test title 1", description: "Test description 1" })
			.expect(201);

		createdTodoId = res.body.id;

		expect(res.body).toHaveProperty("id");
		expect(res.body).toHaveProperty("title", "Test title 1");
		expect(res.body).toHaveProperty("description", "Test description 1");
		expect(res.body).toHaveProperty("completed", false);
	});

	it("should fetch all todos", async () => {
		const res = await request(app).get("/api/todos").expect(200);

		expect(Array.isArray(res.body)).toBeTruthy();
	});

	it("should fetch a specific todo by ID", async () => {
		const res = await request(app)
			.get(`/api/todos/${createdTodoId}`)
			.expect(200);

		expect(res.body).toHaveProperty("id", createdTodoId);
		expect(res.body).toHaveProperty("title");
		expect(res.body).toHaveProperty("description");
	});

	it("should update a todo by ID", async () => {
		const res = await request(app)
			.put(`/api/todos/${createdTodoId}`)
			.send({
				title: "Updated title",
				description: "Updated description",
				completed: true,
			})
			.expect(200);

		expect(res.body).toHaveProperty("id", createdTodoId);
		expect(res.body).toHaveProperty("title", "Updated title");
		expect(res.body).toHaveProperty("description", "Updated description");
		expect(res.body).toHaveProperty("completed", true);
	});

	it("should delete a todo by ID", async () => {
		await request(app).delete(`/api/todos/${createdTodoId}`).expect(200);

		await request(app).get(`/api/todos/${createdTodoId}`).expect(404);
	});
});
