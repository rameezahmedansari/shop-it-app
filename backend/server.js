import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
  res.send("API is running....");
});

app.get("/api/products", (req, res) => {});
app.get("/api/products/:id", (req, res) => {
  res.json(product);
});

// app.listen(5000, console.log("Server running on port 5000"));
// const PORT = process.env.PORT || 5000;

// app.listen(
//   PORT,
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );
