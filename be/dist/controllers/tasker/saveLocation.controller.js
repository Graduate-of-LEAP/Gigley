"use strict";
// controllers/Tasker/updateTaskerLocation.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTaskerLocationController = void 0;
const models_1 = require("../../models");
const saveTaskerLocationController = async (req, res) => {
    const { location } = req.body;
    const taskerId = req.tasker.id; // Assume the logged-in tasker's ID
    try {
        const updatedTasker = await models_1.taskerModel.findByIdAndUpdate(taskerId, { location }, { new: true });
        if (!updatedTasker) {
            return res.status(404).json({ message: 'Tasker not found' });
        }
        res.status(200).json({ message: 'Location updated successfully' });
    }
    catch (error) {
        console.error('Error updating location:', error);
        res.status(500).json({ message: 'Failed to update location' });
    }
};
exports.saveTaskerLocationController = saveTaskerLocationController;
