import { RequestHandler } from 'express';
import { taskerModel } from '../../models';

export const getAllTaskerController: RequestHandler = async (_req, res) => {
  try {
    const allTasker = await taskerModel.find().populate('workDetails');

    res.json(allTasker);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
