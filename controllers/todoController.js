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
  const newTask = await Task.create(info);
  res.status(201).json(newTask);
};
