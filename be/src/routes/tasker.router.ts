import { Router } from 'express';
import { taskerRegisterController } from '../controllers/tasker/register-tasker.controller';
import { taskerLoginController } from '../controllers/tasker/login-tasker.controller';

const authTaskerRouter = Router();

authTaskerRouter.post('/register', taskerRegisterController);
authTaskerRouter.post('/login', taskerLoginController);

export { authTaskerRouter };
