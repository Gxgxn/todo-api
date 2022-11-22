const express = require("express");
const router = express.Router();
const createTodoController = require("../controllers/createTodoController");
const createTaskTodoController = require("../controllers/createTaskTodoController");
const deleteTodoController = require("../controllers/deleteTodoController");
const getallTodo = require("../controllers/getTodosController");
const getTodo = require("../controllers/getTodosController");
router.get("/", function (req, res) {
  res.send("Hello World");
});
router.post("/createtodo", createTodoController);
router.put("/createtask/:id", createTaskTodoController);
router.delete("/deletetodo/:id", deleteTodoController);
router.get("/getalltodo", getallTodo);
router.get("/gettodo/:id", getTodo);

module.exports = router;
