import express from "express";
import {
  addTour,
  deleteTour,
  getTours,
  updateTour,
  updateTours,
  uploadController,
} from "../controllers";
import { uploads, uploadMany, verifyToken, isAdmin } from "../middleware";
import upload from "../middleware/multer.js";
const tourRoute = express.Router();
// ................
/**
 * @swagger
 * components:
 *   schemas:
 *    Tour:
 *     type: object
 *     properties:
 *       destination:
 *         type: string
 *       backdropImage:
 *         type: string
 *       Title:
 *         type: string
 *       Description:
 *         type: string
 *       Duration:
 *         type: string
 *       GroupTize:
 *         type: string
 *       Price:
 *         type: string
 *       Discount:
 *         type: string
 *       TourType:
 *         type: string
 *       Departure:
 *         type: string
 *       Seats:
 *         type: string
 *       fromMonth:
 *         type: string
 *       toMonth:
 *         type: string
 *       departureTime:
 *         type: string
 *       ReturnTime:
 *         type: string
 *       Gallery:
 *         type: array
 *         items:
 *           type: string
 *
 *
 */
/**
 * @swagger
 * tags:
 *  name: Tours
 *  description: The Tours managing API's
 */
tourRoute.delete("/delete-Tour/:id", verifyToken, isAdmin, deleteTour);
tourRoute.patch(
  "/update-Tour/:paramid",
  verifyToken,
  isAdmin,
  upload,
  updateTours
);
/**
 * @swagger
 * /api/v1/Tours/addTour:
 *  post:
 *    summary: -Add Tour
 *    tags: [Tours]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              destination:
 *                type: string
 *              backdropImage:
 *                type: file
 *                items:
 *                    type: string
 *                    format: binary
 *              Title:
 *                type: string
 *              Description:
 *                type: string
 *              Duration:
 *                type: string
 *              GroupTize:
 *                type: string
 *              Price:
 *                type: string
 *              Discount:
 *                type: string
 *              TourType:
 *                type: string
 *              Departure:
 *                type: string
 *              Seats:
 *                type: string
 *              fromMonth:
 *                type: string
 *              toMonth:
 *                type: string
 *              departureTime:
 *                type: string
 *              ReturnTime:
 *                type: string
 *              gallery:
 *                  type: array
 *                  items:
 *                      type: file
 *                      format: binary
 *    security:
 *       - bearerAuth: []
 *    responses:
 *      200:
 *        description: You have successfully logged in
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tour'
 *      500:
 *        description: internal server error
 *
 */
tourRoute.post("/addTour", verifyToken, isAdmin, upload, addTour);
// tourRoute.post('/addTour',upload,uploadController)
tourRoute.get("/", getTours);
export default tourRoute;
