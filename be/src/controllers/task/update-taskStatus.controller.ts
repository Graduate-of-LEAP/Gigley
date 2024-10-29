import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

export const updateTaskStatusController = async (
  req: Request,
  res: Response
) => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      taskId,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
