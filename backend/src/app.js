import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// for image upload
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

//routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

export default app;
