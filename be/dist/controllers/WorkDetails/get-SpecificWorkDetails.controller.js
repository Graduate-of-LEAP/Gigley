"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificWorkDetailController = void 0;
const models_1 = require("../../models");
const getSpecificWorkDetailController = async (req, res) => {
    try {
        const { location, subCategoryId } = req.query;
        if (!location || !subCategoryId) {
            return res
                .status(400)
                .json({ message: 'Location and Subcategory are required' });
        }
        // Step 1: Find taskers by location and populate workDetails
        const taskers = await models_1.taskerModel.find({ location }).populate({
            path: 'workDetails',
            match: { subCategoryId }, // Filter workDetails by subCategoryId
            select: 'hourlyRate', // Only include the hourlyRate in the result
        });
        console.log('taskers', taskers);
        // Step 2: Extract all hourly rates from matched workDetails
        const hourlyRates = taskers
            .flatMap((tasker) => tasker.workDetails)
            .map((workDetail) => Number(workDetail.hourlyRate)) // Convert to number
            .filter((rate) => !isNaN(rate)); // Filter out any NaN rates
        if (hourlyRates.length === 0) {
            return res
                .status(404)
                .json({ message: 'No matching work details found' });
        }
        console.log('hourlyRates', hourlyRates);
        // Step 3: Calculate the average hourly rate
        const totalRate = hourlyRates.reduce((sum, rate) => sum + rate, 0);
        const averageRate = totalRate / hourlyRates.length;
        res.status(200).json({ averageHourlyRate: Math.round(averageRate) });
    }
    catch (error) {
        console.error('Error fetching work details:', error);
        res.status(500).json({ message: 'Error fetching work details' });
    }
};
exports.getSpecificWorkDetailController = getSpecificWorkDetailController;
