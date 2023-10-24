import express from "express";
import { Booking } from "../controllers/booking";
import { verifyToken } from "../middleware";

const bookingRoute = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *      Booking:
 *         type: object
 *         properties:
 *             tourId:
 *               type: string
 *               description: tour's registered ID
 *             paymentMethod:
 *               type: string
 *               description: User's Payment Method
 *
 */
/**
 * @swagger
 * tags:
 *  name: Booking
 *  description: Booking tour API
 */
/**
 * @swagger
 * /api/v1/booking/book:
 *  post:
 *    summary: -Add Booking
 *    tags: [Booking]
 *    security:
 *       - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Booking'
 *    responses:
 *      201:
 *        description: You have successfully Booked the tour
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Booking'
 *      500:
 *        description: internal server error
 */ 

bookingRoute.post("/book", verifyToken, Booking);

export default bookingRoute;
