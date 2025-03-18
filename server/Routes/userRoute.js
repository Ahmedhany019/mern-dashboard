import express from "express"
import {userRegister,userLogin,listOfUsers, deleteUser} from "../controllers/userController.js"
import authMiddleware from "../middlewares/auth.js"
import timeOut from "../middlewares/timeOut.js"
const router = express.Router()

router.post("/register",timeOut,userRegister)
router.post("/login",timeOut,userLogin)
router.get("/",timeOut,authMiddleware,listOfUsers)
router.delete("/:id",timeOut,authMiddleware,deleteUser)


export default router