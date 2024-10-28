// controllers/Tasker/updateTaskerLocation.controller.ts

import { Request, Response } from 'express';
import { taskerModel } from '../../models';

export const saveTaskerLocationController = async (
  req: Request,
  res: Response
) => {
  const { location } = req.body;
  const taskerId = req.tasker.id; // Assume the logged-in tasker's ID

  try {
    const updatedTasker = await taskerModel.findByIdAndUpdate(
      taskerId,
      { location },
      { new: true }
    );

    if (!updatedTasker) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    res.status(200).json({ message: 'Location updated successfully' });
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({ message: 'Failed to update location' });
  }
};
