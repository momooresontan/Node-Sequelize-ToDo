const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.get("/", todoController.getAll);
router.post("/", todoController.createTask);
router.get("/:id", (req, res) => {});
router.put("/", (req, res) => {});
router.delete("/", (req, res) => {});

module.exports = router;
