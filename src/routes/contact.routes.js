import express from "express"
import { getContacts, sendContact } from "../controllers/contact"
import { isAdmin, verifyToken } from "../middleware"
const contactRouter = express.Router()
/**
 * @swagger
 * components:
 *    schemas:
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
 * tags:
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

/**
 * @swagger
 * /api/v1/contact/contacts:
 *   get:
 *      summary: All Contacts
 *      tags: [Contact]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *             description: All received contacts
 *             content:
 *                  application/json:
 *                      schema:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Contact'
 *          404:
 *            description: No contact found
 *          500:
 *            description: Internal server error
 * 
 */ 
contactRouter.get('/contacts',verifyToken,isAdmin,getContacts)

export default contactRouter