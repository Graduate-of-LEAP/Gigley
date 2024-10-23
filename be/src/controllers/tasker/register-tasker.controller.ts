import { RequestHandler } from 'express';
import { taskerModel } from '../../models';
import bcrypt from 'bcrypt';

export const taskerRegisterController: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, phone, lastName } = req.body as {
      name: string;
      email: string;
      password: string;
      lastName: string;
      phone: string;
    };

    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const tasker = await taskerModel.findOne({ email });

    if (tasker) {
      return res
        .status(400)
        .json({ message: 'Ийм бүртгэлтэй харилцагч байна.' });
    }

    await taskerModel.create({
      firstName: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      lastName: lastName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
  } catch (error) {
    console.log(error);
  }
};
