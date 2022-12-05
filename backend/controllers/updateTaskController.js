const Todo = require("../model/Todo");

module.exports = async function updateTaskController(req, res) {
  try {
    const todoId = req.params.id;
    const taskId = req.params.taskId;
    const newTask = req.body.text;
    if (!taskId || !todoId || !newTask)
      throw new Error("both todo id and task id required");
    // const todo = await Todo.findById(todoId);
    const todo = await Todo.findById(todoId);
    const newTasks = todo.tasks.map((taskObj) => {
      if (taskObj._id == taskId) {
        taskObj.task = newTask;
        return taskObj;
      } else {
        return taskObj;
      }
    });
    todo.tasks = newTasks;
    await todo.save();

    res.status(202).json({
      success: true,
      message: "Task updated Successfully",
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
