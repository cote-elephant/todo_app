import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
});

const taskSchema = new Schema(
  {
    title: String,
    author: { type: authorSchema, required: true },
    date: { type: Date },
    description: { type: String },
    completed: { type: Boolean },
    review: { type: String },
  },
  {
    timestamp: true,
  }
);

export default model("Task", taskSchema);
