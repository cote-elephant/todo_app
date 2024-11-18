import express from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  patchTask,
  deleteSingleTask,
} from "../controllers/taskControllers.js";
const taskRouter = express.Router();

taskRouter.route("/tasks")
  .get(getAllTasks)      // GET all tasks
  .post(createTask);     // POST a new task

taskRouter.route("/tasks/:id")
  .put(updateTask)       // PUT (full update) for a single task by ID
  .patch(patchTask)      // PATCH (partial update) for a single task by ID
  .delete(deleteSingleTask); // DELETE a single task by ID

export default taskRouter;

