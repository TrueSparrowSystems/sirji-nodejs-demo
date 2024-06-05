# Todo App Backend API

This is a simple backend API for a Todo application built with Express.js. It includes basic CRUD operations for managing todos with in-memory persistence.

Purpose of this repo is to give Demos for Sirji.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system. You can download them from [here](https://nodejs.org/).

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone git@github.com:TrueSparrowSystems/sirji-nodejs-demo.git
cd sirji-nodejs-demo
```

### Installing Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### Running the Server

To start the server, use the following command:

```bash
npm start
```

The server will start running on http://localhost:3000.

## API Documentation

The API documentation is available in the OpenAPI format. You can view the OpenAPI specification in the [`docs/openapi.yaml`](./docs/openapi.yaml) file.

## Mermaid Sequence Diagrams

- [Get All Todos](docs/sequenceDiagrams/getAllTodos.mermaid)
- [Get Todo by ID](docs/sequenceDiagrams/getTodoById.mermaid)
- [Create Todo](docs/sequenceDiagrams/createTodo.mermaid)
- [Update Todo](docs/sequenceDiagrams/updateTodo.mermaid)
- [Delete Todo](docs/sequenceDiagrams/deleteTodo.mermaid)

## Postman Collection

The Postman Collection is available [here](./docs/postman_collection.json)
