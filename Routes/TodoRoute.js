const express = require("express");
const router = express.Router();

const { createToDo } = require("../Controllers/createToDo");
const { getToDo } = require("../Controllers/GetToDo");
const { getTodoById } = require("../Controllers/GetToDoById");
const { updateTodo } = require("../Controllers/UpdateToDo");
const { DeleteToDo } = require("../Controllers/DeleteToDo");

// API Routes
router.post("/createTodo", createToDo);
router.get("/getTodo", getToDo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", DeleteToDo);

module.exports = router;
