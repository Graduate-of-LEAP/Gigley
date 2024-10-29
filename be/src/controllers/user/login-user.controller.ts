import { RequestHandler } from 'express';
import { userModel } from '../../models';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';

export const loginController: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ message: 'Ийм бүртгэлтэй хэрэглэгч байхгүй байна.' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Нууц үг буруу.' });
  }
  const token = jwt.sign(
    {
      userName: user.userName,
      email: user.email,
      id: user._id,
      type: 'user',
    },
    process.env.JWT_SECRET as string
  );

  return res.status(200).json({
    token,
    user: {
      userName: user.userName,
      email: user.email,
      id: user._id,
    },
  });
};
