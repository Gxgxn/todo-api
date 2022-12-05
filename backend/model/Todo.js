const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    task: { type: String, trim: true },
    isDone: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const TodoSchema = new Schema({
  userId: {
    type: String,
    require: [true, "userID is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
    maxlength: [40, "title must be under 40 characters"],
    trim: true,
  },
  tasks: [TaskSchema],
});

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;
