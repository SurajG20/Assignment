const Task = require("../models/Tasks");
const { BadRequestError, NotFoundError } = require("../errors");

const { StatusCodes } = require("http-status-codes");

// create a task
const createTask = async (req, res) => {
  try {
    const { title, desc, dueDate, category } = req.body;
    const parsedDueDate = dueDate ? calculateDueDate(dueDate) : null;
    const task = await Task.create({
      title,
      desc,
      dueDate: parsedDueDate,
      category,
    });
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Task created successfully", task });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

// helper function to calculate due date
// 1D => 1 day, 2D => 2 days
const calculateDueDate = (numberDays) => {
  const match = numberDays.match(/^(\d+)D$/);

  if (match) {
    const daysToAdd = parseInt(match[1]);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    return currentDate;
  }
  return null;
};

// get all tasks
const getAllTasks = async (req, res) => {
  try {
    const { category } = req.query;
    let tasks;
    if (category) {
      tasks = await Task.find({ category });
    } else {
      tasks = await Task.find({});
    }
    res.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndRemove({ _id: id });
  if (!task) {
    throw new NotFoundError(`Couldn't find task with id ${id}`);
  }
  res.status(StatusCodes.OK).send({ msg: "Deleted Successfully" });
};

// update a task
const updateTask = async (req, res) => {
  const {
    body: { title, desc },
    params: { id },
  } = req;
  if (title === "" || desc === "") {
    throw new BadRequestError("Please Provide title and desc");
  }

  const newTask = await Task.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!newTask) {
    throw new NotFoundError(`System couldn't find the task with Id ${id}`);
  }
  res.status(StatusCodes.OK).json({ newTask });
};

// get a single task to mark completion
const getSingleTask = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const task = await Task.findOne({ _id: id });
    if (!task) {
      throw new NotFoundError(`No Task with id ${id}`);
    }
    if (!task.status) {
      task.status = !task.status;
    }
    await task.save();
    res
      .status(StatusCodes.OK)
      .json({ task, msg: "Task Completed Succesfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  getSingleTask,
};
