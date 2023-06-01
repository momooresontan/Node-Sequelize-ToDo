const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expresstasks", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
