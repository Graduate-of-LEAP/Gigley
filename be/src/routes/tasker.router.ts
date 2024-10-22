import { Router } from 'express';
import { taskerRegisterController } from '../controllers/tasker/register-tasker.controller';
import { taskerLoginController } from '../controllers/tasker/login-tasker.controller';

const taskerRouter = Router();

taskerRouter.post('/register', taskerRegisterController);
taskerRouter.post('/login', taskerLoginController);

export { taskerRouter };
