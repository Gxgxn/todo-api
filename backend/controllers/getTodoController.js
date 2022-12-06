const Todo = require("../model/Todo");

module.exports = async function getTodoController(req, res) {
  try {
    const id = req.params.id;
    const alltodos = await Todo.findById(id);
    // console.log();
    if (!Object.keys(alltodos).length) throw new Error("No Todos found");

    res.json(alltodos);
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
