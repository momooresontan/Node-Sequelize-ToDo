const { Sequelize } = require("sequelize");

exports.sequelize.sequelize = new Sequelize("expresstasks", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

exports.connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB successfully connected");
  } catch (err) {
    console.log(err);
  }
};
