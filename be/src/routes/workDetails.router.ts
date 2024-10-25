import { Router } from 'express';
import { getWorkDetailsController } from '../controllers/WorkDetails/get-workDetails.controller';
import { createWorkDetailsController } from '../controllers/WorkDetails/create-WorkDetails.controller';
import { updateWorkDetailsController } from '../controllers/WorkDetails/update-workDetails.controller';
import { deleteWorkDetailsController } from '../controllers/WorkDetails/delete-workDetails.controller'; // Import delete controller

const workDetailsRouter = Router();

workDetailsRouter.post('/create', createWorkDetailsController);
workDetailsRouter.get('/get', getWorkDetailsController);
workDetailsRouter.put('/update/:id', updateWorkDetailsController);
workDetailsRouter.delete('/delete/:subCategoryId', deleteWorkDetailsController);

export { workDetailsRouter };
