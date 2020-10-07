import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import colors from "colors";

//routes imports
import productRoutes from "./routes/productRoutes";

//import middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware";

dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/products", productRoutes);

//middlewares
//404 middleware
app.use(notFound);
//errors middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
