import { RequestHandler } from 'express';
import { userModel } from '../../models';
import bcrypt from 'bcrypt';

export const registerController: RequestHandler = async (req, res) => {
  try {
    const { userName, lastName, email, phoneNumber, password } = req.body as {
      userName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      password: string;
    };
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: 'Ийм бүртгэлтэй харилцагч байна.' });
    }

    const newUser = await userModel.create({
      userName: userName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
  } catch (error) {
    console.log(error);
  }
};
