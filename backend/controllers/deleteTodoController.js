const Todo = require("../model/Todo");

module.exports = async function deleteTodoController(req, res) {
  try {
    const todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    res.status(204).json({
      success: true,
      message: "User Deleted Successfully",
      deletedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
