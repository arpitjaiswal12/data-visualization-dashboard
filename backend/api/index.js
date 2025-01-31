import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "../src/database/ConnectDB.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);//imp
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false})) // imp

const PORT = process.env.PORT || 5001;

import insightsRouter from "../src/routers/Insights.router.js";

app.use("/api", insightsRouter);

app.get("/", (req, res) => {
  res.send("Backend task");
});

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    })
  )
  .catch(() => {
    console.log("Error while listing Server");
  });
