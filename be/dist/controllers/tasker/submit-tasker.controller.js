"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitWorkDetailsController = void 0;
const models_1 = require("../../models");
// Submit work details for a tasker
const submitWorkDetailsController = async (req, res) => {
    const { workDetailsIds } = req.body;
    const taskerId = req.tasker.id; // Make sure to pass this in the route
    try {
        // Find tasker and add the submitted work details to their record
        const tasker = await models_1.taskerModel.findByIdAndUpdate(taskerId, { $addToSet: { workDetails: { $each: workDetailsIds } } }, // Add workDetails IDs without duplicates
        { new: true });
        if (!tasker) {
            return res.status(404).json({ message: 'Tasker not found' });
        }
        res
            .status(200)
            .json({ message: 'Work details submitted successfully', tasker });
    }
    catch (error) {
        console.error('Error submitting work details:', error);
        return res.status(500).json({ message: 'Error submitting work details' });
    }
};
exports.submitWorkDetailsController = submitWorkDetailsController;
