const Todo = require("../model/Todo");

module.exports = async function getTodoController(req, res) {
  try {
    const userId = req.params.id;
    const alltodos = await Todo.find({ userId: userId });
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
