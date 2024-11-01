"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskerLoginController = void 0;
const models_1 = require("../../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const taskerLoginController = async (req, res) => {
    const { email, password } = req.body;
    const tasker = await models_1.taskerModel.findOne({ email });
    if (!tasker) {
        return res
            .status(400)
            .json({ message: 'Ийм бүртгэлтэй хэрэглэгч байхгүй байна.' });
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, tasker.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Нууц үг буруу.' });
    }
    const token = jsonwebtoken_1.default.sign({
        firstName: tasker.firstName,
        lastName: tasker.lastName,
        email: tasker.email,
        phone: tasker.phone,
        id: tasker._id,
        type: 'tasker',
    }, process.env.JWT_SECRET);
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
exports.taskerLoginController = taskerLoginController;
