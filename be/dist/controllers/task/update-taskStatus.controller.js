"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskStatusController = void 0;
const task_schema_1 = require("../../models/task.schema");
const updateTaskStatusController = async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = await task_schema_1.taskModel.findByIdAndUpdate(taskId, { status }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    }
    catch (error) {
        console.error('Error updating task status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.updateTaskStatusController = updateTaskStatusController;
