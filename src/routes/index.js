import express from "express";
import AuthRouter from "./auth.routes";
import tourRoute from "./tours.routes";
const MainRouter  = express.Router()
MainRouter.use('/auth',AuthRouter)
MainRouter.use('/Tours',tourRoute)
export default MainRouter