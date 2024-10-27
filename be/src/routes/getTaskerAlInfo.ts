import express from 'express';
import { getTaskerController } from '../controllers/tasker/get-tasker.controller';

const getTaskerAllInforouter = express.Router();

getTaskerAllInforouter.get('/get', getTaskerController);

export default getTaskerAllInforouter;
