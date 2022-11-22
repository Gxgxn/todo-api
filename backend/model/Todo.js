const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  tasks: [String],
});

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;