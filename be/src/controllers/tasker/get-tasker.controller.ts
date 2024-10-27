import { Request, Response } from 'express';
import { taskerModel } from '../../models/tasker.schema';

export const getTaskerController = async (req: Request, res: Response) => {
  try {
    const taskerId = req.tasker.id; // Adjust if this isn't where the ID is located

    const tasker = await taskerModel.findById(taskerId).populate('workDetails');

    if (!tasker) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    res.status(200).json(tasker);
  } catch (error) {
    console.error('Error fetching Tasker information:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
