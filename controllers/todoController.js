const Task = require("../models/todoModel");

exports.getAll = async (req, res) => {
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body());
};
