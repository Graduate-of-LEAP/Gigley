import { Request, Response } from 'express';
import { workDetailsModel } from '../../models/workDetails';

export const getTaskersByWork = async (req: Request, res: Response) => {
  try {
    const { workId } = req.query;
    const workers = await workDetailsModel
      .find({ subCategoryId: workId })
      .populate('taskerId');

    if (!workers) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    res.status(200).json(workers);
  } catch (error) {
    console.error('Error fetching Tasker information:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
