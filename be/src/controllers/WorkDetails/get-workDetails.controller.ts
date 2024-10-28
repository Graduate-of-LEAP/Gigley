import { RequestHandler } from 'express';

import bcrypt from 'bcrypt';
import { workDetailsModel } from '../../models/workDetails';
import { Tasker } from '../../middlewares/auth.middlewares';

export const getWorkDetailsController: RequestHandler = async (req, res) => {
  const tasker: Tasker = req.tasker;

  const taskerId = tasker.id;

  try {
    // Fetch all work details related to this tasker
    const workDetails = await workDetailsModel.find({ taskerId });

    if (!workDetails) {
      return res.status(404).json({ message: 'No work details found' });
    }

    res.status(200).json(workDetails);
  } catch (error) {
    console.error('Error fetching work details:', error);
    res.status(500).json({ message: 'Error fetching work details' });
  }
};
