"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkDetailsController = void 0;
const workDetails_1 = require("../../models/workDetails");
const getWorkDetailsController = async (req, res) => {
    const tasker = req.tasker;
    const taskerId = tasker.id;
    try {
        // Fetch all work details related to this tasker
        const workDetails = await workDetails_1.workDetailsModel.find({ taskerId });
        if (!workDetails) {
            return res.status(404).json({ message: 'No work details found' });
        }
        res.status(200).json(workDetails);
    }
    catch (error) {
        console.error('Error fetching work details:', error);
        res.status(500).json({ message: 'Error fetching work details' });
    }
};
exports.getWorkDetailsController = getWorkDetailsController;
