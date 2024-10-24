import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface Tasker {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
}

// Move the declaration to a separate file or keep it here
declare global {
  namespace Express {
    interface Request {
      tasker: Tasker; // Make user optional
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/authTasker')) return next();

  const auth = req.headers.authorization;

  const token = auth?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Please log in!' });

  try {
    req.tasker = jwt.verify(token, process.env.JWT_SECRET!) as Tasker;

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error); // Log the error
    return res.status(401).json({ error: 'Invalid or expired token!' });
  }
};

export { authMiddleware };
