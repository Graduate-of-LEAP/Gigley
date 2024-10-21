import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';
import { userRouter } from './routes/user.router';
import dotenv from 'dotenv';
dotenv.config();

connectToDatabase();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json());

app.use('/mainCategory', mainCategoryRouter);
app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
