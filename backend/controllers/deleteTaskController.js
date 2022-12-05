const Todo = require("../model/Todo");

module.exports = async function deleteTaskController(req, res) {
  try {
    const todoId = req.params.id;
    const taskId = req.params.taskId;
    if (!taskId || !todoId)
      throw new Error("both todo id and task id required");
    // const todo = await Todo.findById(todoId);
    const todo = await Todo.findById(todoId);
    const newTasks = todo.tasks.filter((task) => task._id != taskId);
    if (newTasks.length === todo.tasks.length)
      throw new Error("Task not found");
    todo.tasks = newTasks;
    await todo.save();

    res.status(204).json({
      success: true,
      message: "Task Deleted Successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
