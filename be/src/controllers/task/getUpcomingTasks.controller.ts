import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

export const getConfirmedTasksController = async (
  req: Request,
  res: Response
) => {
  const taskerId = req.tasker.id; // Assuming `taskerId` is available from the authenticated request

  try {
    // Find tasks where the status is 'confirmed' for the specific tasker
    const confirmedTasks = await taskModel
      .find({
        taskerId,
        status: 'confirmed',
      })
      .populate({
        path: 'subCategoryId',
        select: 'subCategoryName',
      })
      .populate({
        path: 'customerId',
        select: 'name avatar', // Assuming `name` and `avatar` are fields in your customer schema
      });

    res.status(200).json({ confirmedTasks });
  } catch (error) {
    console.error('Error fetching confirmed tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
