// Import Model
const Todo = require("../Models/ToDo");

// Define Route Handler
exports.createToDo = async (req, res) => {
  try {
    // Extracting values from req.body
    const { name, task } = req.body;

    // Create a new TODO entry
    const todo = await Todo.create({ name, task });

    // Send JSON response
    return res.status(200).json({
      success: true,
      data: todo,
      message: "Todo created successfully",
    });
  } catch (err) {
    console.log("Error in createToDo Controller:", err.message);

    return res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: "Todo creation failed",
    });
  }
};
