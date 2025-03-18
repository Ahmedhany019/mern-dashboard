
import express from "express"
import { addProduct, deleteProduct, listOfProduct } from "../controllers/productController.js"
import authMiddleware from "../middlewares/auth.js"
const routerProduct = express.Router()


routerProduct.get("/",listOfProduct)
routerProduct.post("/add",authMiddleware,addProduct)
routerProduct.delete("/delete/:id",deleteProduct)


export default routerProduct