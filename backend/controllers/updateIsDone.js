const Todo = require("../model/Todo");

module.exports = async function updateIsDone(req, res) {
  try {
    const todoId = req.params.id;
    const taskId = req.params.taskId;
    const status = req.body.isDone;
    console.log(status);
    if (!taskId || !todoId) {
      throw new Error("both todo id and task id required");
    }

    // const todo = await Todo.findById(todoId);
    const todo = await Todo.findById(todoId);
    const newTasks = todo.tasks.map((taskObj) => {
      if (taskObj._id == taskId) {
        taskObj.isDone = !status;
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
