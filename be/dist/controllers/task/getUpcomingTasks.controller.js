"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfirmedTasksController = void 0;
const task_schema_1 = require("../../models/task.schema");
const getConfirmedTasksController = async (req, res) => {
    const taskerId = req.tasker.id; // Assuming `taskerId` is available from the authenticated request
    try {
        // Find tasks where the status is 'confirmed' for the specific tasker
        const confirmedTasks = await task_schema_1.taskModel
            .find({
            taskerId,
            status: 'confirmed',
        })
            .populate({
            path: 'subCategoryId',
            select: 'subCategoryName',
        })
            .populate({
            path: 'customerId',
            select: 'name avatar', // Assuming `name` and `avatar` are fields in your customer schema
        });
        res.status(200).json({ confirmedTasks });
    }
    catch (error) {
        console.error('Error fetching confirmed tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getConfirmedTasksController = getConfirmedTasksController;
