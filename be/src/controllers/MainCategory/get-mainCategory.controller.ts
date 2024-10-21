import { RequestHandler } from 'express';
import { mainCategoryModel } from '../../models/mainCategory.schema';

export const getCategoryController: RequestHandler = async (_req, res) => {
  try {
    console.log('getCategoryController');
    const categoriesData = await mainCategoryModel.find();

    res.json(categoriesData);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
