import { RegisterUser, changePassword, deleteUser, getData, loginUser, update } from "../controllers/authentication";
import express from "express";
import { isAdmin, verifyToken } from "../middleware";
const AuthRouter = express.Router()

AuthRouter.get('/View-all-users',verifyToken,getData)
AuthRouter.patch('/update/:paramid',verifyToken,isAdmin,update)
AuthRouter.delete('/Delete/:id',verifyToken,isAdmin,deleteUser)
AuthRouter.post('/change-password',verifyToken,changePassword)
AuthRouter.post('/signup',RegisterUser)
AuthRouter.post('/login',loginUser)

export default AuthRouter