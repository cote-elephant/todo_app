import { Task } from "../models/taskModel.js";

//*GET--------------------------
export async function getSingleTask(req, res) {
  //checkHandler for if ID is valid
  try {
    const getItem = await Task.findById(req.params.id);
    // if(getItem.length === 0)
    console.log(getItem)
    getItem
      ? res.status(200).json({
          message: "Todo retrieved",
          method: req.method,
          content: getItem,
        })
      : res.sendStatus(404);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

export async function getAllTasks(req, res) {
  try {
    const getItems = await Task.find();
    getItems
      ? res.status(200).json({
          message: "Todo retrieved",
          content: getItems,
        })
      : res.sendStatus(404).json({ message: "No tasks found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to retrieve tasks"});
  }
}

//*POST--------------------------
export async function createTask(req, res) {
  try {
    const createItem = await Task.create(req.body);
    createItem
      ? res.status(200).json({
          message: "Todo created",
          method: req.method,
          content: createItem,
        })
      : res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Todo" });
  }
}

//* EDIT--------------------------
export async function updateTask(req, res) {
  //checkHandler for if ID is valid
  try {
    const updateItem = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    updateItem
      ? res.status(200).json({
          message: "Todo updated",
          method: req.method,
          content: updateItem,
        })
      : res.sendStatus(404);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update Task" });
  }
}
export async function patchTask(req, res) {
  //checkHandler for if ID is valid
  try {
    const patchItem = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    patchItem
      ? res.status(200).json({
          message: "Todo partially updated",
          method: req.method,
          content: patchItem,
        })
      : res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to partially update Task" });
  }
}

//*DELETE--------------------------
export async function deleteSingleTask(req, res) {
  //checkHandler for if ID is valid
  try {
    const deleteItem = await Task.findByIdAndDelete(req.params.id);
    deleteItem
      ? res.status(200).json({ message: "Todo deleted", method: req.method, content: deleteItem })
      : res.status(404).json({message: "Tasks not found"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete Todo" });
  }
}
