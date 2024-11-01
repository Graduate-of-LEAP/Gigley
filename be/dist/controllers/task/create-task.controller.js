"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = void 0;
const task_schema_1 = require("../../models/task.schema");
// Controller to create a new task
const createTaskController = async (req, res) => {
    console.log('irlee');
    const { customerId, taskerId, // This can be null if the customer has not selected a tasker yet
    location, taskSize, description, timeOfDay, specificDate, subCategoryId, } = req.body;
    try {
        // Create a new task based on the provided information
        const newTask = new task_schema_1.taskModel({
            customerId,
            taskerId,
            location,
            taskSize,
            description,
            timeOfDay,
            specificDate,
            subCategoryId,
        });
        // Save the task to the database
        const savedTask = await newTask.save();
        res.status(201).json({
            message: 'Task created successfully',
            task: savedTask,
        });
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Failed to create task' });
    }
};
exports.createTaskController = createTaskController;
