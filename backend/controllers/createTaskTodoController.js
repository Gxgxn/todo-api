const Todo = require("../model/Todo");

module.exports = async function createTaskTodoController(req, res) {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) return res.status(400).send("No todo exists");
    const { text } = req.body;
    if (!text) throw new Error("Please provide a valid todo title");
    console.log(todo.tasks);
    todo.tasks.push({ task: text });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
