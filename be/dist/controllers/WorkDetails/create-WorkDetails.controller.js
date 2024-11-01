"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorkDetailsController = void 0;
const workDetails_1 = require("../../models/workDetails");
const createWorkDetailsController = async (req, res) => {
    try {
        const tasker = req.tasker;
        const taskerId = tasker.id;
        const { hourlyRate, vehicles, tools, skillsAndExperience, taskName, subCategoryId, images, } = req.body;
        const newUser = await workDetails_1.workDetailsModel.create({
            taskerId: taskerId,
            taskName: taskName,
            hourlyRate: hourlyRate,
            vehicles: vehicles,
            tools: tools,
            images: images,
            skillsAndExperience: skillsAndExperience,
            subCategoryId: subCategoryId,
        });
        await newUser.save();
        res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createWorkDetailsController = createWorkDetailsController;
