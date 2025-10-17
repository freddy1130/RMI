import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Routes
app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/users", userRoutes);
app.use("/api/companies", companyRoutes); // ← you had it imported but never used
app.use("/api/reviews", reviewRoutes);

// 3. Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/rmi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// 4. Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
