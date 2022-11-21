const Todo = require("../model/Todo");

module.exports = async function createTodoController(req, res) {
  try {
    if (!req.body.title) {
      throw new Error("title is required");
    }
    const newTodo = new Todo({
      title: req.body.title,
    });
    const createdNewTodo = await newTodo.save();
    res.status(202).json(createdNewTodo);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
