import express from "express";
import AuthRouter from "./auth.routes";
import tourRoute from "./tours.routes";
import bookingRoute from "./booking.routes";
import contactRouter from "./contact.routes";
import paymentRoute from "./payment.routes";
import { paginating } from "../controllers";
import { tourModel } from "../models";
import { paginatedData } from "../middleware";
const MainRouter = express.Router();
MainRouter.use("/auth", AuthRouter);
MainRouter.use("/Tours", tourRoute);
MainRouter.use("/booking", bookingRoute);
MainRouter.use("/contact", contactRouter);
MainRouter.use("/payment", paymentRoute);
MainRouter.get("/all",paginatedData(tourModel), paginating);
MainRouter.all("*", (req, res, next) => {
  const err = new Error(`Cant find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});
MainRouter.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
export default MainRouter;
