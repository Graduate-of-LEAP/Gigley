import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface Tasker {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  type: 'user' | 'tasker';
}

declare global {
  namespace Express {
    interface Request {
      tasker: Tasker;
      user: any; // Define a proper interface for the user type if needed
    }
  }
}

// Extend JwtPayload to include Tasker properties
interface DecodedToken extends JwtPayload, Tasker {}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (
    req.path.startsWith('/authTasker') ||
    req.path.startsWith('/user/register') ||
    req.path.startsWith('/user/login') ||
    req.path.startsWith('/mainCategory') ||
    req.path.startsWith('/subCategory') ||
    req.path.startsWith('/getAllTasker') ||
    req.path.startsWith('/task/create')
  )
    return next();

  const auth = req.headers.authorization;
  const token = auth?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Please log in!' });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET! || ''
    ) as DecodedToken;

    if (decoded.type === 'user') {
      req.user = decoded; // Set user property if needed
    } else if (decoded.type === 'tasker') {
      req.tasker = decoded; // Set tasker property
    } else {
      return res.status(403).json({ error: 'Access denied!' });
    }

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return res.status(401).json({ error: 'Invalid or expired token!' });
  }
};

export { authMiddleware };
