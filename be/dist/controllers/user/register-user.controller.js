"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const models_1 = require("../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerController = async (req, res) => {
    try {
        const { userName, lastName, email, phoneNumber, password } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10); // 10 is the salt rounds
        const user = await models_1.userModel.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ message: 'Ийм бүртгэлтэй харилцагч байна.' });
        }
        const newUser = await models_1.userModel.create({
            userName: userName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({ message: 'Хэрэглэгчийн бүртгэл амжилттай үүслээ.' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.registerController = registerController;
