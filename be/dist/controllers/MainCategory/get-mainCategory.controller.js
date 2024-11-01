"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryController = void 0;
const mainCategory_schema_1 = require("../../models/mainCategory.schema");
const getCategoryController = async (req, res) => {
    try {
        const categoriesData = await mainCategory_schema_1.mainCategoryModel
            .find()
            .populate('subCategories');
        res.json(categoriesData);
    }
    catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getCategoryController = getCategoryController;
