import { RequestHandler } from 'express';
import { taskerModel } from '../../models';
import jwt from 'jsonwebtoken';
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
      lastName: tasker.lastName,
      email: tasker.email,
      phone: tasker.phone,
      id: tasker._id,
    },
    process.env.JWT_SECRET as string
  );

  return res.status(200).json({
    token,
    tasker: {
      firstName: tasker.firstName,
      lastName: tasker.lastName,
      email: tasker.email,
      phone: tasker.phone,
      id: tasker._id,
    },
  });
};
