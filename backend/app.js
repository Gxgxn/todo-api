require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const todoRouter = require("./routes/todoRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectToDB();
app.use("/api", todoRouter);

module.exports = app;
