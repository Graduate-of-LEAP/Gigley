import { Request, Response } from 'express';
import { User } from '../../middlewares/auth.middlewares';

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

const getTasker = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasker = req.user;
    console.log('tasker', tasker);

    res.json(tasker);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getTasker };
