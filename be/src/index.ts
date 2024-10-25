import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';
import { userRouter } from './routes/user.router';
import dotenv from 'dotenv';
import { authTaskerRouter } from './routes/tasker.router';
import { authMiddleware } from './middlewares/auth.middlewares';
import { getTaskerRouter } from './routes/getTasker.router';
import { subcategoryRouter } from './routes/subCategory.router';
import { workDetailsRouter } from './routes/workDetails.router';
import { submitTaskerRouter } from './routes/taskerDataUpdate.router';

dotenv.config();
connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use('/subcategory', subcategoryRouter);
app.use('/mainCategory', mainCategoryRouter);
app.use('/user', userRouter);
app.use('/authTasker', authTaskerRouter);
app.use('/tasker', getTaskerRouter);
app.use('/workDetails', workDetailsRouter);
app.use('/submitWorkDetails', submitTaskerRouter);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
