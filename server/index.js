//framework for creating the routing of our applicaiton
import express from "express";
//enables us to send post requests
import bodyParser from "body-parser";
//enables modles for the post
import mongoose from "mongoose";
//enable cross orgina request (i.e server to client)
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

//set limits for our requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//default url is localhost/post 
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

// newurlparser and useunfied avoids errors that may arrise due to depreciation of things
//setup connection with catch
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
