import { RequestHandler } from 'express';
import { subCategoryModel } from '../../models/subCategory.schema';

export const createSubCategoryController: RequestHandler = async (req, res) => {
  try {
    await subCategoryModel.create({ ...req.body });

    res.status(201).json({
      message: 'SubCategory created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
