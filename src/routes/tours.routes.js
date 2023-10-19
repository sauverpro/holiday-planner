import express from "express";
import { addTour, deleteTour, getTours, uploadController } from "../controllers";
import { uploads,uploadMany } from "../middleware";
const tourRoute = express.Router();

tourRoute.delete('/delete-Tour/:id',deleteTour)
tourRoute.post('/addTour',uploads,addTour)
// tourRoute.post('/addTour',uploadController)
tourRoute.get('/',getTours)

export default tourRoute