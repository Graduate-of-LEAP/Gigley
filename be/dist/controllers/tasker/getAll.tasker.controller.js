"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTaskerController = void 0;
const models_1 = require("../../models");
const getAllTaskerController = async (_req, res) => {
    try {
        const allTasker = await models_1.taskerModel.find().populate('workDetails');
        res.json(allTasker);
    }
    catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllTaskerController = getAllTaskerController;
