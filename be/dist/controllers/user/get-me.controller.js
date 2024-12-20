"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeController = void 0;
const models_1 = require("../../models");
const getMeController = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await models_1.userModel.findById(userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        const userData = {
            id: user._id,
            userName: user.userName,
            email: user.email,
            phone: user.phoneNumber,
        };
        return res.status(200).json(userData);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getMeController = getMeController;
