import { RequestHandler } from 'express';
import { subCategoryModel } from '../../models/subCategory.schema';

export const getSubcategoryController: RequestHandler = async (req, res) => {
  try {
    const subCategories = await subCategoryModel.find().populate('categoryId');

    res.json(subCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
