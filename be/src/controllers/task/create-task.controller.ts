import { Request, Response } from 'express';
import { taskModel } from '../../models/task.schema';

// Controller to create a new task
export const createTaskController = async (req: Request, res: Response) => {
  const {
    customerId,
    taskerId, // This can be null if the customer has not selected a tasker yet
    location,
    taskSize,
    description,
    timeOfDay,
    specificDate,
  } = req.body;

  try {
    // Create a new task based on the provided information
    const newTask = new taskModel({
      customerId,
      taskerId,
      location,
      taskSize,
      description,
      timeOfDay,
      specificDate,
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    res.status(201).json({
      message: 'Task created successfully',
      task: savedTask,
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Failed to create task' });
  }
};
