"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const models_1 = require("../../models");
const jwt = require('jsonwebtoken');
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await models_1.userModel.findOne({ email });
    if (!user) {
        return res
            .status(400)
            .json({ message: 'Ийм бүртгэлтэй хэрэглэгч байхгүй байна.' });
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Нууц үг буруу.' });
    }
    const token = jwt.sign({
        userName: user.userName,
        email: user.email,
        id: user._id,
        type: 'user',
    }, process.env.JWT_SECRET);
    return res.status(200).json({
        token,
        user: {
            userName: user.userName,
            email: user.email,
            id: user._id,
        },
    });
};
exports.loginController = loginController;
