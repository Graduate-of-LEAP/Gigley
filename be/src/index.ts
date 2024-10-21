import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { mainCategoryRouter } from './routes/category.router';

connectToDatabase();

const app = express();

app.use(cors());

app.use('/category', mainCategoryRouter);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
