import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';
import { userRouter } from './routes/user.router';
import dotenv from 'dotenv';
import { authTaskerRouter } from './routes/tasker.router';
import { authMiddleware } from './middlewares/auth.middlewares';
import { getTaskerRouter } from './routes/getTasker.router';

dotenv.config();
connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use('/mainCategory', mainCategoryRouter);
app.use('/user', userRouter);
app.use('/authTasker', authTaskerRouter);
app.use('/tasker', getTaskerRouter);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
