const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  getSingleTask,
} = require("../controllers/tasks");

router.route("/").post(createTask).get(getAllTasks);

router.route("/:id").delete(deleteTask).patch(updateTask).get(getSingleTask);

module.exports = router;
