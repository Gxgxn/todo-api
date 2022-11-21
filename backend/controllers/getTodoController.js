const Todo = require("../model/Todo");

module.exports = async function getTodoController(req, res) {
  try {
    const todoId = req.params.id;
    const alltodos = await Todo.findById(todoId);
    console.log(Object.keys(alltodos).length);
    if (!alltodos) throw new Error("No Todos found");

    res.json(alltodos);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
