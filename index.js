const bodyParser = require("body-parser");
require("dotenv").config();
const express = require("express");
import mongoose from "mongoose";
import MainRouter from "./src/routes";
import cors from "cors";

// swagger imports
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
// ...........................
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", MainRouter);

// swagger doc configurations

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Holiday Planner API",
      version: "1.0.0",
      description:
        "Holiday Planner App where you can book a travel and make your life easier",
    },
    servers: [
      {
        url: "https://events-planner.onrender.com",
      },
      {
        url: "http://localhost:5000",
      }, 
    ],
  },
  apis: ["./src/routes/*.js"],
};
const specs = swaggerJSDoc(options);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(specs));

// mongoose connection
mongoose.connect(process.env.DB_CONNECT).then((res) => {
  console.log("database connected well");
});
app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
