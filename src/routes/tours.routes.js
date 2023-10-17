import express from "express";
import { addTour } from "../controllers";
import { uploads } from "../middleware";
const tourRoute = express.Router();

tourRoute.post('/addTour',uploads,addTour)

export default tourRoute