import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
title: String,
author: [String],
date: Date,
description: String,
completed: Boolean,
})

export const Task = mongoose.model("Task", taskSchema);

