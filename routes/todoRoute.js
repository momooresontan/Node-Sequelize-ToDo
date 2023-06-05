const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.get("/", todoController.getAll);
router.post("/", todoController.createTask);
router.get("/:id", todoController.getOneTask);
router.patch("/:id", todoController.updateOneField);
router.put("/:id", todoController.updateOneTask);
router.delete("/");

module.exports = router;
