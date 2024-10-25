import { Router } from 'express';
import { submitWorkDetailsController } from '../controllers/tasker/submit-tasker.controller';

const submitTaskerRouter = Router();

submitTaskerRouter.post('/submit', submitWorkDetailsController);

export { submitTaskerRouter };
