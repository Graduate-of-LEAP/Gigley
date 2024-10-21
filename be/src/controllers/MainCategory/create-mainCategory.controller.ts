import { RequestHandler } from 'express';
import { mainCategoryModel } from '../../models/mainCategory.schema';

export const createCategoryController: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);

    await mainCategoryModel.create({
      name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json({
      message: 'Category created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
