import express from "express";
import { Booking, bookingCount, getBookings, getBookingsCount, getUserBookings } from "../controllers/booking";
import { isAdmin, verifyToken } from "../middleware";

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
 *             Date:
 *               type: string
 *               description: date
 *             tickets:
 *               type: string
 *               description: number of tickects
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

/**
 * @swagger
 * /api/v1/booking:
 *  get:
 *    summary: -Returns all Bookings
 *    tags: [Booking]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *        200:
 *          description: the list of all bookings
 *          content:
 *              application/json:
 *                  schema:
 *                     schema:
 *                         type: array
 *                         items:
 *                          $ref: '#/components/schemas/Booking'
 */

bookingRoute.get("/", verifyToken,isAdmin, getBookings);
/**
 * @swagger
 * /api/v1/booking/myBookings:
 *  get:
 *    summary: -Returns all Bookings of single user
 *    tags: [Booking]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *        200:
 *          description: the list of all single user bookings
 *          content:
 *              application/json:
 *                  schema:
 *                     schema:
 *                         type: array
 *                         items:
 *                          $ref: '#/components/schemas/Booking'
 */
bookingRoute.get("/myBookings", verifyToken, getUserBookings);
bookingRoute.get("/Bookings/", bookingCount);
bookingRoute.get("/countBookings/", getBookingsCount);

export default bookingRoute;
