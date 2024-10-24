import { Router } from 'express';
import { createSubCategoryController } from '../controllers/subCategory/create-subCategory.controller';
import { getSubcategoryController } from '../controllers/subCategory/get-all-subcategory.controller';

const subcategoryRouter = Router();

subcategoryRouter.post('/create', createSubCategoryController);
subcategoryRouter.get('/get', getSubcategoryController);

export { subcategoryRouter };
