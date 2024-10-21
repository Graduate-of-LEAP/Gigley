import { Router } from 'express';
import { getCategoryController } from '../controllers/MainCategory/get-mainCategory.controller';
import { createCategoryController } from '../controllers/MainCategory/create-mainCategory.controller';

const mainCategoryRouter = Router();

mainCategoryRouter.get('/get', getCategoryController);
mainCategoryRouter.post('/create', createCategoryController);

export { mainCategoryRouter };
