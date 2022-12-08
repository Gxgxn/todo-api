const express = require("express");
const router = express.Router();
const createTodoController = require("../controllers/createTodoController");
const createTaskTodoController = require("../controllers/createTaskTodoController");
const deleteTodoController = require("../controllers/deleteTodoController");
const getallTodo = require("../controllers/getTodosController");
const getTodo = require("../controllers/getTodoController");
const deleteTask = require("../controllers/deleteTaskController");
const updateTask = require("../controllers/updateTaskController");
const toggleIsDone = require("../controllers/updateIsDone");
router.get("/", function (req, res) {
  res.send("Hello World");
});
router.post("/createtodo", createTodoController);
router.put("/createtask/:id", createTaskTodoController);
router.delete("/deletetodo/:id", deleteTodoController);
router.delete("/deletetask/:id/:taskId", deleteTask);
router.put("/updatetask/:id/:taskId", updateTask);
router.put("/toggle/:id/:taskId", toggleIsDone);
router.get("/getalltodo/:uId", getallTodo);
router.get("/gettodo/:id", getTodo);

module.exports = router;
