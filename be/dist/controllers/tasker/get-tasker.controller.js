"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskerController = void 0;
const tasker_schema_1 = require("../../models/tasker.schema");
const getTaskerController = async (req, res) => {
    try {
        const taskerId = req.tasker.id; // Adjust if this isn't where the ID is located
        const tasker = await tasker_schema_1.taskerModel.findById(taskerId).populate('workDetails');
        if (!tasker) {
            return res.status(404).json({ message: 'Tasker not found' });
        }
        res.status(200).json(tasker);
    }
    catch (error) {
        console.error('Error fetching Tasker information:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getTaskerController = getTaskerController;
