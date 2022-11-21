const Todo = require("../model/Todo");

module.exports = async function createTaskTodoController(req, res) {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) return res.status(400).send("No todo exists");
    const { text } = req.body;
    todo.tasks.push(text);
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};
