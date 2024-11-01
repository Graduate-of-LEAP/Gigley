"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubcategoryController = void 0;
const subCategory_schema_1 = require("../../models/subCategory.schema");
const getSubcategoryController = async (req, res) => {
    try {
        const subCategories = await subCategory_schema_1.subCategoryModel
            .find()
            .populate('mainCategoryId');
        res.json(subCategories);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getSubcategoryController = getSubcategoryController;
