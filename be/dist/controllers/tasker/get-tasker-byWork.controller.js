"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskersByWork = void 0;
const workDetails_1 = require("../../models/workDetails");
const getTaskersByWork = async (req, res) => {
    try {
        const { workId } = req.query;
        const workers = await workDetails_1.workDetailsModel
            .find({ subCategoryId: workId })
            .populate('taskerId');
        if (!workers) {
            return res.status(404).json({ message: 'Tasker not found' });
        }
        res.status(200).json(workers);
    }
    catch (error) {
        console.error('Error fetching Tasker information:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getTaskersByWork = getTaskersByWork;
