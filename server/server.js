import express from "express";
import cors from "cors";

import taskRouter from "./routes/taskRoute.js";
import { MongoClient } from "mongodb";
import "dotenv/config";
// import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DATABASE_NAME;
const PORT = process.env.PORT || 5000;

// choose Client
const client = new MongoClient(MONGODB_URI);

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    // process.exit(1);
  }
};

// choose Datenbank
export const db = client.db(DB_NAME);
await connectToDB();

// -------------------------- ENDPOINTS --------------------------
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
