import { RequestHandler } from 'express';
import { userModel } from '../../models';
import bcrypt from 'bcrypt';

export const taskerRegisterController: RequestHandler = async (req, res) => {
  try {
    const { taskerName, email, password } = req.body as {
      taskerName: string;
      email: string;
      password: string;
    };
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: 'Ийм бүртгэлтэй харилцагч байна.' });
    }

    const newTasker = await userModel.create({
      taskerName,
      email,
      password: hashedPassword,
    });
    await newTasker.save();
    res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
  } catch (error) {
    console.log(error);
  }
};
