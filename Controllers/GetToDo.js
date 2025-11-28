// Import Model
const Todo = require("../Models/ToDo");

// Define Route Handler
exports.getToDo = async (req, res) => {
  try {
    // Fetch only name & task fields
    // Remove name task to see all fields 
    const todos = await Todo.find({}, "name task");

    return res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched (name + task only)",
    });

  } catch (err) {
    console.log("Error in getToDo Controller:", err.message);

    return res.status(500).json({
      success: false,
      data: [],
      message: "Todos cannot be fetched",
    });
  }
};

