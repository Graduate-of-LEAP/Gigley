import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface User {
  name: string;
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/authTasker')) return next();

  const auth = req.headers.authorization;
  const token = auth?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Please log in!' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET!) as User;

    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token!' });
  }
};

export { authMiddleware };
