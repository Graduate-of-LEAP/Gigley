import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

export const getTaskerTasksController = async (req: Request, res: Response) => {
  const taskerId = req.tasker.id;

  try {
    // Populate `subCategoryId` with fields `_id` and `subCategoryName`
    const tasks = await taskModel.find({ taskerId }).populate('subCategoryId');

    // Filter tasks based on their status
    const pendingTasks = tasks.filter((task) => task.status === 'pending');
    const upcomingTasks = tasks.filter((task) => task.status === 'confirmed');
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const canceledTasks = tasks.filter((task) => task.status === 'canceled');

    // Respond with the categorized tasks
    res
      .status(200)
      .json({ pendingTasks, upcomingTasks, completedTasks, canceledTasks });
  } catch (error) {
    console.error('Error fetching Tasker tasks:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
