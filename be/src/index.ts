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
import multer, { memoryStorage } from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import getTaskerAllInforouter from './routes/getTaskerAlInfo';
import { allTasker } from './routes/getAllTasker.router';
import { taskRouter } from './routes/task.router';

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
app.use('/getTaskerAllInforouter', getTaskerAllInforouter);
app.use('/getAllTasker', allTasker);
app.use('/task', taskRouter);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();
const upload = multer({ storage });

async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });
  return res;
}

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const cloudinaryResponse = await handleUpload(dataURI);

    res.json(cloudinaryResponse);
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).send('Failed to upload image.');
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
