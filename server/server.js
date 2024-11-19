import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

import taskRouter from "./src/routes/taskRoute.js";
import { connectToDB } from "./src/utils/connectToDB.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========== connection between frontend and backend ==========
// app.use(cors());

// ==========  routes ==========
app.use("/", taskRouter);
// app.use("/", userRouter);

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DATABASE_NAME;
const PORT = process.env.EXAMPLE_PORT || 5000;
const KEY = process.env.SECRET_EXAMPLE_KEY;

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
}

connectToDB(MONGODB_URI)
  .then(() => startServer())
  .catch((error) => {
    console.error(error);
    // process.exit(2)
  });


  // mit MongoDB verbinden
// const client = new MongoClient(MONGODB_URI);

// Datenbank auswählen
// const db = client.db(DB_NAME);