const Todo = require("../Models/ToDo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, task } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      { 
        name, 
        task, 
        updatedAt: Date.now() 
      },
      { new: true } // return updated document
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: todo,
      message: "Updated successfully",
    });

  } catch (err) {
    console.log("Error in updateTodo:", err.message);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Error updating Todo",
    });
  }
};
