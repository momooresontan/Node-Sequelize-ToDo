const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "All todos" });
});
router.post("/", (req, res) => {});
router.get("/:id", (req, res) => {});
router.put("/", (req, res) => {});
router.delete("/", (req, res) => {});

module.exports = router;
