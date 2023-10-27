import express from "express";
import AuthRouter from "./auth.routes";
import tourRoute from "./tours.routes";
import bookingRoute from "./booking.routes";
import contactRouter from "./contact.routes";
const MainRouter  = express.Router()
MainRouter.use('/auth',AuthRouter)
MainRouter.use('/Tours',tourRoute)
MainRouter.use('/booking',bookingRoute)
MainRouter.use('/contact',contactRouter)
export default MainRouter