const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expresstasks", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB successfully connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sequelize, connectToDB };
