import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';
import { userRouter } from './routes/user.router';
import dotenv from 'dotenv';
import { taskerRouter } from './routes/tasker.router';
dotenv.config();

connectToDatabase();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json());

app.use('/mainCategory', mainCategoryRouter);
app.use('/user', userRouter);
app.use('/tasker', taskerRouter);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
