"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewTasksForTasker = void 0;
const task_schema_1 = require("../../models/task.schema");
const getNewTasksForTasker = async (req, res) => {
    const taskerId = req.tasker.id;
    if (!taskerId) {
        return res.status(400).json({ message: 'Tasker ID is missing' });
    }
    try {
        const newTasks = await task_schema_1.taskModel
            .find({
            taskerId,
            status: 'pending',
        })
            .sort({ createdAt: -1 })
            .populate('subCategoryId');
        res.status(200).json(newTasks);
    }
    catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getNewTasksForTasker = getNewTasksForTasker;
