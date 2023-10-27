import express from "express";
import {
  addTour,
  deleteTour,
  getByIdTour,
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
 *      201:
 *        description: Tour added successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tour'
 *      500:
 *        description: internal server error
 *
 */

tourRoute.post("/addTour", verifyToken, isAdmin, upload, addTour);

/**
 * @swagger
 * /api/v1/Tours:
 *  get:
 *    summary: -Returns all registered tours
 *    tags: [Tours]
 *    responses:
 *        200:
 *          description: the list of all users
 *          content:
 *              application/json:
 *                  schema:
 *                     schema:
 *                         type: array
 *                         items:
 *                          $ref: '#/components/schemas/Tour'
 */
tourRoute.get("/", getTours);

/**
 * @swagger
 * /api/v1/Tours/{tourID}:
 *  get:
 *    summary: -Returns single tour details
 *    tags: [Tours]
 *    parameters:
 *        - in: path
 *          name: tourID
 *          required: true
 *          schema: 
 *            type: string
 *            description: Id of tour to be retrieved
 *    responses:
 *        200:
 *          description: the list of all users
 *          content:
 *              application/json:
 *                  schema:
 *                     schema:
 *                         type: array
 *                         items:
 *                          $ref: '#/components/schemas/Tour'
 *        404:
 *          description: tour doesn't found 
 *        500:
 *          description: internal server error
 *       
 */

tourRoute.get('/:tourID',getByIdTour)


/**
 * @swagger
 * /api/v1/Tours/update-Tour/{tourID}:
 *  patch:
 *    summary: -Update Tour
 *    tags: [Tours]
 *    parameters:
 *      - in: path
 *        name: tourID
 *        required: true
 *        schema:
 *          type: string
 *          description: The tour id to be updated
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
 *      201:
 *        description: You have successfully updated tour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tour'
 *      500:
 *        description: internal server error
 *
 */

tourRoute.patch(
  "/update-Tour/:tourID",
  verifyToken,
  isAdmin,
  upload,
  updateTours
);
// tourRoute.post('/addTour',upload,uploadController)


/**
 * @swagger
 * /api/v1/Tours/delete-Tour/{id}:
 *  delete: 
 *    tags: [Tours]
 *    summary: Delete tour by ID
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *         type: string
 *         description: Id of  tour to be deleted
 *    responses:
 *      200:
 *        description: tour deleted successfully
 *      404:
 *        description: failed to deleted tour
 * 
 */ 
tourRoute.delete("/delete-Tour/:id", verifyToken, isAdmin, deleteTour);

export default tourRoute;
