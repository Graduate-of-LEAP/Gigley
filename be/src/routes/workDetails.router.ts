import { Router } from 'express';
import { getWorkDetailsController } from '../controllers/WorkDetails/get-workDetails.controller';
import { createWorkDetailsController } from '../controllers/WorkDetails/create-WorkDetails.controller';

const workDetailsRouter = Router();

workDetailsRouter.post('/create', createWorkDetailsController);
workDetailsRouter.get('/get', getWorkDetailsController);

export { workDetailsRouter };
