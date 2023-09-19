const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide the title"],
    minLength: 3,
    maxLength: 20,
  },
  desc: {
    type: String,
    required: [true, "Please Provide the description"],
    minLength: 3,
    maxLength: 50,
  },
  status: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  // Some optional categories
  category: {
    type: String,
    enum: [
      "work",
      "personal",
      "study",
      "chorus",
      "family",
      "health",
      "hobbies",
    ],
    default: "personal",
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
