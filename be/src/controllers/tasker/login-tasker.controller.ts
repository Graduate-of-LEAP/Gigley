import { RequestHandler } from 'express';
import { taskerModel } from '../../models';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';

export const taskerLoginController: RequestHandler = async (req, res) => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const tasker = await taskerModel.findOne({ email });

  if (!tasker) {
    return res
      .status(400)
      .json({ message: 'Ийм бүртгэлтэй хэрэглэгч байхгүй байна.' });
  }

  const isPasswordValid = await bcrypt.compare(password, tasker.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Нууц үг буруу.' });
  }
  const token = jwt.sign(
    {
      firstName: tasker.firstName,
      email: tasker.email,
      phone: tasker.phone,
      lastName: tasker.lastName,
      id: tasker._id,
    },
    process.env.JWT_SECRET as string
  );

  return res.status(200).json({
    token,
    user: {
      firstName: tasker.firstName,
      email: tasker.email,
      phone: tasker.phone,
      lastName: tasker.lastName,
      id: tasker._id,
    },
  });
};
