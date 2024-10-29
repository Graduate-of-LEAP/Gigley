import { Request, Response } from 'express';
import { userModel } from '../../models';

interface CustomRequest extends Request {
  user: { id: string };
}
export const getMeController = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    const userData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };
    return res.status(200).json(userData);
  } catch (error) {
    console.log(error);
  }
};
