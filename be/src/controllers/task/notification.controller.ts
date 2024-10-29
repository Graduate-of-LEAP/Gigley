// controllers/notification.controller.ts
import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

export const getNewTasksForTasker = async (req: Request, res: Response) => {
  const taskerId = req.tasker.id;

  console.log('taskerId', taskerId);

  if (!taskerId) {
    return res.status(400).json({ message: 'Tasker ID is missing' });
  }

  try {
    const newTasks = await taskModel
      .find({
        taskerId,
        status: 'pending',
      })
      .sort({ createdAt: -1 });

    res.status(200).json(newTasks);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
