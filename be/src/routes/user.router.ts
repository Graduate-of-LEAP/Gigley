import { Router } from 'express';
import { registerController } from '../controllers/user/register-user.controller';
import { loginController } from '../controllers/user/login-user.controller';

const userRouter = Router();

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);

export { userRouter };
