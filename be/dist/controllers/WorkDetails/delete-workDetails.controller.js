"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWorkDetailByIdController = void 0;
const workDetails_1 = require("../../models/workDetails");
const deleteWorkDetailByIdController = async (req, res) => {
    const { workDetailId } = req.params;
    console.log('workDetailId received in request:', workDetailId);
    try {
        const result = await workDetails_1.workDetailsModel.findByIdAndDelete(workDetailId);
        if (!result) {
            // No work detail was found and deleted
            return res
                .status(404)
                .json({ message: 'No work detail found with this ID' });
        }
        // Successfully deleted the work detail
        return res
            .status(200)
            .json({ message: 'Work detail deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting work detail:', error);
        return res.status(500).json({ message: 'Error deleting work detail' });
    }
};
exports.deleteWorkDetailByIdController = deleteWorkDetailByIdController;
