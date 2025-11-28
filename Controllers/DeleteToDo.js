const Todo = require("../Models/ToDo");

exports.DeleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Delete Request ID:", id);

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });

  } catch (err) {
    console.log("Delete error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Error deleting Todo",
    });
  }
};
