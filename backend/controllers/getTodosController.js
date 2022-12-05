// import
//test route
const Todo = require("../model/Todo");

module.exports = async function getTodosController(req, res, next) {
  try {
    const todos = await Todo.find();
    res.status(201).json(todos);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
