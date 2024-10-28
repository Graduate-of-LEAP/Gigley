import { RequestHandler } from 'express';
import { subCategoryModel } from '../../models/subCategory.schema';

export const createSubCategoryController: RequestHandler = async (req, res) => {
  try {
    const { subCategoryName, mainCategoryId } = req.body;

    await subCategoryModel.create({
      subCategoryName: subCategoryName,
      mainCategoryId: mainCategoryId,
    });

    res.status(201).json({
      message: 'SubCategory created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
