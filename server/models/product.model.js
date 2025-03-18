import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: String
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
