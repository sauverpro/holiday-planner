import express from "express"
import { sendContact } from "../contact"
const contactRouter = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *      Contact:
 *         type: object
 *         properties:
 *             body:
 *              type: string
 *              description: message to be sent 
 *             email:
 *              type: string
 *              description: email of the sender
 *         example: 
 *            body: hello i am john doe i would like to have special talk with you
 *            email: johndoe@gmail.com
 */ 

/**
 * @swagger
 * tags
 *  name: Contact
 *  description: contact endpoints
 * 
 */ 

/**
 * @swagger
 * /api/v1/contact:
 *  post:
 *    summary: -Contact
 *    tags: [Contact]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/Contact'
 *    responses:
 *      200:
 *        description: Thanks for contacting us
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Contact'
 *      500:
 *        description: internal server error
 *
 */

contactRouter.post('/',sendContact)

export default contactRouter