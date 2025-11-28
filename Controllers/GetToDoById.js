const Todo = require("../Models/ToDo");

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById({_id:id},"name");

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: todo,
      message: "Todo fetched successfully",
    });

  } catch (err) {
    console.log("Error in getTodoById:", err.message);

    return res.status(500).json({
      success: false,
      data: null,
      message: "Error fetching Todo by ID",
    });
  }
};
