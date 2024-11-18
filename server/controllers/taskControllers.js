import { ObjectId } from "mongodb";
import { db } from "../server.js";

//*GET--------------------------
export async function getAllTasks(req, res) {
  try {
    const item = await db.collection("todo-item").find().toArray();
    res.status(200).send(item);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

// export async function getSingleTask(req, res) {
//   const itemId = new ObjectId(req.params.id);
//   try {
//     const item = await db.collection("todo-item").findOne({ _id: itemId });
//     res.status(200).send(item);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//   }
// }

//*POST--------------------------
export async function createTask(req, res) {
  try {
    const newContent = req.body;
    // console.log(newContent);
    const postItem = await db.collection("todo-item").insertOne(newContent);
    res.status(201).json({
      message: "Todo created",
      method: req.method,
      content: newContent,
    });
    if (postItem.matchedCount === 0) {
        return res.send("A problem!");
      }
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Todo" });
  }
}

//* EDIT--------------------------
export async function updateTask(req, res) {
  try {
    const itemId = new ObjectId(req.params.id);
    const updatedContent = req.body;
    const putItem = await db
      .collection("todo-item")
      //updateOne(filter, update, options)
      // filter -> _id
      // update -> updatedContent
      //$set => update operator
      .updateOne({ _id: itemId }, { $set: updatedContent });

    if (putItem.matchedCount === 0) {
      return res.send("A problem!");
    }

    // const updatedItem = await db
    //   .collection("todo-item")
    //   .findOne({ _id: itemId });

    res.status(200).json({ message: "Todo updated", content: putItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update Task" });
  }
}
export async function patchTask(req, res) {
  try {
    const itemId = new ObjectId(req.params.id);
    const patchedField = req.body;
    const patchItem = await db
      .collection("todo-item")
      .updateOne({ _id: itemId }, { $set: patchedField });
    if (patchItem.matchedCount === 0) {
      return res.send("A problem!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Failed to partially update Task` });
  }
}

//*DELETE--------------------------
export async function deleteSingleTask(req, res) {
  try {
    const itemId = new ObjectId(req.params.id);
    const deletedItem = await db
      .collection("todo-item")
      .deleteOne({ _id: itemId });

    res.status(200).json({ message: "Todo deleted", content: deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete Todo" });
  }
}
