
import express from "express"
import { addProduct, deleteProduct, listOfProduct } from "../controllers/productController.js"
import timeOut from "../middlewares/timeOut.js"
import authMiddleware from "../middlewares/auth.js"
const routerProduct = express.Router()


routerProduct.get("/",timeOut,listOfProduct)
routerProduct.post("/add",timeOut,authMiddleware,addProduct)
routerProduct.delete("/delete/:id",timeOut,deleteProduct)


export default routerProduct