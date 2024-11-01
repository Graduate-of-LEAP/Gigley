"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = void 0;
const mainCategory_schema_1 = require("../../models/mainCategory.schema");
const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        await mainCategory_schema_1.mainCategoryModel.create({
            ...req.body,
        });
        res.status(201).json({
            message: 'Category created successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};
exports.createCategoryController = createCategoryController;
