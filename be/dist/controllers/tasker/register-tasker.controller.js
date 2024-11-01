"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskerRegisterController = void 0;
const models_1 = require("../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const taskerRegisterController = async (req, res) => {
    try {
        const { firstName, email, password, phone, lastName } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10); // 10 is the salt rounds
        const tasker = await models_1.taskerModel.findOne({ email });
        if (tasker) {
            return res
                .status(400)
                .json({ message: 'Ийм бүртгэлтэй харилцагч байна.' });
        }
        await models_1.taskerModel.create({
            firstName: firstName,
            email: email,
            password: hashedPassword,
            phone: phone,
            lastName: lastName,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.taskerRegisterController = taskerRegisterController;
