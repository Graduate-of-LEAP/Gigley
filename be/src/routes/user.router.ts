import { Router } from 'express';
import { registerController } from '../controllers/user/register-user.controller';
import { loginController } from '../controllers/user/login-user.controller';
import { getMeController } from '../controllers/user/get-me.controller';

const userRouter = Router();

userRouter
  .post('/register', registerController)
  .post('/login', loginController)
  .get('/me', getMeController);

export { userRouter };
