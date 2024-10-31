import { Router } from 'express';
import { getWorkDetailsController } from '../controllers/WorkDetails/get-workDetails.controller';
import { createWorkDetailsController } from '../controllers/WorkDetails/create-WorkDetails.controller';
import { updateWorkDetailsController } from '../controllers/WorkDetails/update-workDetails.controller';
import { deleteWorkDetailByIdController } from '../controllers/WorkDetails/delete-workDetails.controller'; // Import delete controller
import { getSpecificWorkDetailController } from '../controllers/WorkDetails/get-SpecificWorkDetails.controller';

const workDetailsRouter = Router();

workDetailsRouter.post('/create', createWorkDetailsController);
workDetailsRouter.get('/get', getWorkDetailsController);
workDetailsRouter.put('/update/:id', updateWorkDetailsController);
workDetailsRouter.delete(
  '/delete/:workDetailId',
  deleteWorkDetailByIdController
);
workDetailsRouter.get(
  '/getWorkDetailsBySubcategory',
  getSpecificWorkDetailController
);

export { workDetailsRouter };
