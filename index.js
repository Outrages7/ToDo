const express = require('express');
const DbConnect = require('./config/Database');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Connect Database
DbConnect();

// Middleware
app.use(express.json());

// Import Routes
const ToDoRoutes = require("./Routes/TodoRoute");

// Mount API
app.use("/api/v1", ToDoRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server started Successfully at ${PORT}`);
});

// Default Route
app.get("/", (req, res) => {
    res.send("Server is up and running 🚀");
});
