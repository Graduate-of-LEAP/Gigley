import { Router } from 'express';
import { submitWorkDetailsController } from '../controllers/tasker/submit-tasker.controller';
import { saveTaskerLocationController } from '../controllers/tasker/saveLocation.controller';
import { uploadProfileImageController } from '../controllers/tasker/upload-profileImages.controller';

const submitTaskerRouter = Router();

submitTaskerRouter.post('/submit', submitWorkDetailsController);
submitTaskerRouter.post('/saveLocation', saveTaskerLocationController);
submitTaskerRouter.post('/uploadImage', uploadProfileImageController);

export { submitTaskerRouter };
