import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
});

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    importance: { type: String, required: true },
    completed: { type: Boolean, default: false },
    date: Date,
  },
  {
    timestamp: true,
  }
);

export const Task = model("Task", taskSchema);
