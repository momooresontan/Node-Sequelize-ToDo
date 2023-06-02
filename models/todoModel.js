const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Task = sequelize.define("Task", {
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

//sequelize.sync(); //Helps when creating database table

module.exports = Task;
