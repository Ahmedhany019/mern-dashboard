import express from "express"
import {userRegister,userLogin,listOfUsers, deleteUser} from "../controllers/userController.js"
import authMiddleware from "../middlewares/auth.js"
const router = express.Router()

router.post("/register",userRegister)
router.post("/login",userLogin)
router.get("/",authMiddleware,listOfUsers)
router.delete("/:id",authMiddleware,deleteUser)


export default router