const express = require("express");
const router = express.Router();

const { createToDo } = require("../Controllers/createToDo");

// API Route
router.post("/createTodo", createToDo);

module.exports = router;
