const express = require("express");
const todoRouter = require("./routes/todoRoute");
const { sequelize, connectToDB } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mount the router
app.use("/api/v1/todo", todoRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, async () => {
  console.log(`Server running on port: ${PORT}`);
  await connectToDB();
});
