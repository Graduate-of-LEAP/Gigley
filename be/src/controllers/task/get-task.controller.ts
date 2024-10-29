import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

// Controller to fetch tasks by Tasker ID
export const getTaskerTasksController = async (req: Request, res: Response) => {
  const taskerId = req.tasker.id;

  try {
    // Fetch all tasks associated with the given taskerId
    const tasks = await taskModel.find({ taskerId });

    // Filter tasks based on their status
    const pendingTasks = tasks.filter((task) => task.status === 'pending');
    const upcomingTasks = tasks.filter((task) => task.status === 'confirmed');
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const canceledTasks = tasks.filter((task) => task.status === 'canceled');

    // Respond with a structured JSON object containing categorized tasks
    res
      .status(200)
      .json({ pendingTasks, upcomingTasks, completedTasks, canceledTasks });
  } catch (error) {
    console.error('Error fetching Tasker tasks:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
