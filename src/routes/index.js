import express from "express";
import AuthRouter from "./auth.routes";
import tourRoute from "./tours.routes";
import bookingRoute from "./booking.routes";
const MainRouter  = express.Router()
MainRouter.use('/auth',AuthRouter)
MainRouter.use('/Tours',tourRoute)
MainRouter.use('/booking',bookingRoute)
export default MainRouter