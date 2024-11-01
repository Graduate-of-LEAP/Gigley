"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubCategoryController = void 0;
const subCategory_schema_1 = require("../../models/subCategory.schema");
const createSubCategoryController = async (req, res) => {
    try {
        const { subCategoryName, mainCategoryId } = req.body;
        await subCategory_schema_1.subCategoryModel.create({
            subCategoryName: subCategoryName,
            mainCategoryId: mainCategoryId,
        });
        res.status(201).json({
            message: 'SubCategory created successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};
exports.createSubCategoryController = createSubCategoryController;
