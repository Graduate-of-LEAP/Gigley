import { Request, Response } from 'express';

const getTasker = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;

    res.json(user);
  } catch (error) {
    console.error('Error in getTasker:', error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getTasker };
