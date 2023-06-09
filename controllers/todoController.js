const Task = require("../models/todoModel");

exports.getAll = async (req, res) => {
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
};

exports.createTask = async (req, res) => {
  let info = {
    content: req.body.content,
    description: req.body.description,
    isComplete: req.body.isComplete,
  };
  const newTask = Task.build(info);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.json(err);
  }
};

exports.getOneTask = async (req, res) => {
  let id = req.params.id;
  const task = await Task.findOne({
    where: { id },
  });
  res.status(200).json(task);
};

exports.updateOneTask = async (req, res) => {
  let id = req.params.id;
  const task = await Task.findOne({
    where: { id },
  });

  const { content, description, isComplete } = req.body;
  await task.set({ content, description, isComplete });
  await task.save();

  res.status(200).json(task);
};

exports.updateOneField = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  const { isComplete } = req.body;
  await task.set({ isComplete });
  await task.save();

  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({
    where: { id },
  });
  await task.destroy();
  res.status(204).json("Task has been deleted");
};
