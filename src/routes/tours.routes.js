import express from "express";
import { addTour, deleteTour, getTours, updateTour, uploadController } from "../controllers";
import { uploads,uploadMany, verifyToken, isAdmin, } from "../middleware";
import upload from "../middleware/multer.js"
const tourRoute = express.Router();
// ................

tourRoute.delete('/delete-Tour/:id',verifyToken,isAdmin,deleteTour)
tourRoute.patch('/update-Tour/:paramid',verifyToken,isAdmin,uploads,updateTour)
tourRoute.post('/addTour',upload,addTour)
// tourRoute.post('/addTour',upload,uploadController)
tourRoute.get('/',getTours)
export default tourRoute