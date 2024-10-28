import { RequestHandler } from 'express';
import { workDetailsModel } from '../../models/workDetails';

import { Tasker } from '../../middlewares/auth.middlewares';

export const createWorkDetailsController: RequestHandler = async (req, res) => {
  try {
    const tasker: Tasker = req.tasker;

    const taskerId = tasker.id;
    const {
      minHours,
      vehicles,
      tools,
      skillsAndExperience,
      taskName,
      subCategoryId,
      images,
    } = req.body as {
      vehicles: string;
      taskName: string;
      minHours: number;
      tools: string;
      skillsAndExperience: string;
      password: string;
      subCategoryId: string;
      images: [string];
    };

    const newUser = await workDetailsModel.create({
      taskerId: taskerId,
      taskName: taskName,
      minHours: minHours,
      vehicles: vehicles,
      tools: tools,
      images: images,
      skillsAndExperience: skillsAndExperience,
      subCategoryId: subCategoryId,
    });
    await newUser.save();
    res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
  } catch (error) {
    console.log(error);
  }
};
