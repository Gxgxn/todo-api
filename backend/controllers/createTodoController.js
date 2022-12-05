const Todo = require("../model/Todo");

module.exports = async function createTodoController(req, res) {
  try {
    if (!req.body.title || !req.body.id) {
      throw new Error("title and id required to ");
    }
    const newTodo = new Todo({
      userId: req.body.id,
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
