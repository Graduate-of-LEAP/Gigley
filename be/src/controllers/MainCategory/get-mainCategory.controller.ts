import { RequestHandler } from 'express';
import { mainCategoryModel } from '../../models/mainCategory.schema';

export const getCategoryController: RequestHandler = async (_req, res) => {
  console.log('categoriesData');
  try {
    const categoriesData = await mainCategoryModel
      .find()
      .populate('subCategories');

    console.log('categoriesData', categoriesData);

    res.json(categoriesData);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
