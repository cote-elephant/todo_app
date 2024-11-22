import "dotenv/config";
import mongoose from "mongoose";

import Task from "../models/taskModel.js";

const MONGO_DB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log(`Connection with mongoDB: SUCCESS ✅`);

    const tasks = [
      {
        title: "Complete Mongoose Setup",
        author: { firstName: "Alice", lastName: "Johnson" },
        date: new Date("2024-11-20"),
        description:
          "Setup Mongoose models and connect to the MongoDB instance.",
        completed: true,
        review: "Well-structured and easy to understand.",
      },
      {
        title: "Write API Endpoints",
        author: { firstName: "Bob", lastName: "Smith" },
        date: new Date("2024-11-18"),
        description: "Develop API endpoints for task management.",
        completed: false,
        review: "Pending review after testing.",
      },
      {
        title: "Implement Authentication",
        author: { firstName: "Clara", lastName: "Davis" },
        date: new Date("2024-11-21"),
        description: "Add user authentication and authorization.",
        completed: false,
        review: "Requires further testing with edge cases.",
      },
      {
        title: "Create Frontend Interface",
        author: { firstName: "Daniel", lastName: "Lee" },
        date: new Date("2024-11-19"),
        description: "Build a frontend interface for task management.",
        completed: true,
        review: "Visually appealing and user-friendly.",
      },
      {
        title: "Document the API",
        author: { firstName: "Emma", lastName: "Williams" },
        date: new Date("2024-11-17"),
        description: "Create comprehensive documentation for the API.",
        completed: true,
        review: "Clear and well-detailed documentation.",
      },
    ];

    Task.insertMany(tasks)
      .then(() => {
        console.log("Testdaten erfolgreich hinzugefügt");
        mongoose.disconnect();
      })
      .catch((error) => {
        console.error("Testdaten nicht erfolgreich hinzugefügt!");
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error(`Connection with mongoDB: FAILED ⛔`, error);
    process.exit(1);
  });
