import { Router } from 'express';
import { getAllTaskerController } from '../controllers/tasker/getAll.tasker.controller';
import { getTaskersByWork } from '../controllers/tasker/get-tasker-byWork.controller';

const allTasker = Router();

allTasker
  .get('/taskers', getAllTaskerController)
  .get('/taskersWithWork', getTaskersByWork);

export { allTasker };
