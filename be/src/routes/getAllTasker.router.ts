import { Router } from 'express';
import { getAllTaskerController } from '../controllers/tasker/getAll.tasker.controller';

const allTasker = Router();

allTasker.get('/taskers', getAllTaskerController);

export { allTasker };
