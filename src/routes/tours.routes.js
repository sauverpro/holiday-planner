import express from "express";
import { addTour, deleteTour, getTours, updateTour, updateTours, uploadController } from "../controllers";
import { uploads,uploadMany, verifyToken, isAdmin, } from "../middleware";
import upload from "../middleware/multer.js"
const tourRoute = express.Router();
// ................

tourRoute.delete('/delete-Tour/:id',verifyToken,isAdmin,deleteTour)
tourRoute.patch('/update-Tour/:paramid',verifyToken,isAdmin,upload,updateTours)
 
tourRoute.post('/addTour',verifyToken,isAdmin,upload,addTour)
// tourRoute.post('/addTour',upload,uploadController)
tourRoute.get('/',getTours)
export default tourRoute