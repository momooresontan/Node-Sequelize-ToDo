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
