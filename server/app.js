import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import routerUser from "./Routes/userRoute.js";
import routerProduct from "./Routes/productRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", routerUser);
app.use("/api/product", routerProduct);

// تشغيل السيرفر
connectDB();
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
