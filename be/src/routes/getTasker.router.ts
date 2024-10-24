import { Router } from 'express';

import { getTasker } from '../controllers/tasker/tasker.controller';

const getTaskerRouter = Router();

getTaskerRouter.get('/get', getTasker);

export { getTaskerRouter };
