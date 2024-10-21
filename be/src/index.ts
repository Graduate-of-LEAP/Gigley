import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';
import { userRouter } from './routes/user.router';
import dotenv from 'dotenv';
<<<<<<< HEAD
import { authTaskerRouter } from './routes/tasker.router';
import { authMiddleware } from './middlewares/auth.middlewares';
import { getTaskerRouter } from './routes/getTasker.router';

=======
import { subcategoryRouter } from './routes/subCategory.router';
>>>>>>> a77e0f2 (arai duusagui)
dotenv.config();

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use('/mainCategory', mainCategoryRouter);
app.use('/user', userRouter);
<<<<<<< HEAD
app.use('/authTasker', authTaskerRouter);
app.use('/tasker', getTaskerRouter);
=======
app.use('/subcategory', subcategoryRouter);
>>>>>>> a77e0f2 (arai duusagui)

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
