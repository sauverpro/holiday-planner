const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
import mongoose from "mongoose";
import MainRouter from "./src/routes";
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1',MainRouter)
mongoose.connect(process.env.DB_CONNECT).then((res) => {
  console.log("database connected well");
});
app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
