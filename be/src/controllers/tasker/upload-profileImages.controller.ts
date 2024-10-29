import { Request, Response } from 'express';
import { taskerModel } from '../../models';

export const uploadProfileImageController = async (
  req: Request,
  res: Response
) => {
  const { profileImage } = req.body;
  const taskerId = req.tasker?.id;

  if (!taskerId) {
    return res.status(401).json({ message: 'Unauthorized: Tasker ID missing' });
  }

  try {
    const tasker = await taskerModel.findByIdAndUpdate(
      taskerId,
      { profileImage },
      { new: true }
    );

    if (!tasker) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    res
      .status(200)
      .json({ message: 'Profile image uploaded successfully', tasker });
  } catch (error) {
    console.error('Error uploading profile image:', error);
    return res.status(500).json({ message: 'Error uploading profile image' });
  }
};
