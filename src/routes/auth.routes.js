import {
  RegisterUser,
  changePassword,
  deleteUser,
  getData,
  loginUser,
  update,
} from "../controllers/authentication";
import express from "express";
import { isAdmin, verifyToken } from "../middleware";
const AuthRouter = express.Router();
/**
 * @swagger
 * components:
 *   securitySchemes:
 *      bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *   schemas:
 *      Users:
 *          type: object
 *          required:
 *              - FullNames
 *              - email
 *              - PhoneNumber
 *              - Password
 *          properties:
 *              FullNames:
 *                  type: string
 *                  description: User's full name
 *              email:
 *                 type: string
 *                 description: Email of the user
 *              PhoneNumber:
 *                  type: string
 *                  description: User's telephone number
 *              Password:
 *                  type: string
 *                  description: User's password
 *              Location:
 *                 type: string
 *                 description: User location
 *              Role:
 *                  type: string
 *                  description: User's role
 *          example:
 *             FullNames: john doe
 *             email: johndoe@gmail.com
 *             PhoneNumber: "+250788888888"
 *             Password: "12345"
 *             Location: london
 *             Role: User
 *
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The user managing API's
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *  post:
 *    summary: -SIGNUP
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/Users'
 *    responses:
 *      200:
 *        description: You have successfully signed up
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      500:
 *        description: internal server error
 *
 */
AuthRouter.post("/signup", RegisterUser);
/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: -LOGIN
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/Users'
 *    responses:
 *      200:
 *        description: You have successfully logged in
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      500:
 *        description: internal server error
 *
 */
AuthRouter.post("/login", loginUser);

/**
 * @swagger
 * /api/v1/auth/View-all-users:
 *  get:
 *    summary: returns all registered users
 *    tags: [Users]
 *    security:
 *       - bearerAuth: []
 *    responses:
 *        200:
 *          description: the list of all users
 *          content:
 *              application/json:
 *                  schema:
 *                     schema:
 *                         type: array
 *                         items:
 *                          $ref: '#/components/schemas/Users'
 */
AuthRouter.get("/View-all-users", verifyToken, getData);
/**
 * @swagger
 * /api/v1/auth/update:
 *   patch:
 *      summary: Update user by ID
 *      tags: [Users]
 *      requestBody: 
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      security:
 *       - bearerAuth: []
 *      responses:
 *        200:
 *          description : User updated successfully
 *          content:
 *             application/json:
 *                schema: 
 *                  type: array
 *                  items:
 *                   $ref: '#/components/schemas/Users'
 *        500:
 *          description: internal server error
 * 
 * 
 */ 
AuthRouter.patch("/update", verifyToken, update);

AuthRouter.delete("/Delete/:id", verifyToken, isAdmin, deleteUser);
AuthRouter.post("/change-password", verifyToken, changePassword);

export default AuthRouter;
