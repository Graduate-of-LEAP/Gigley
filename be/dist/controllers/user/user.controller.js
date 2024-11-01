"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasker = void 0;
const getTasker = async (req, res) => {
    try {
        const user = req.body;
        res.json(user);
    }
    catch (error) {
        console.error('Error in getTasker:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getTasker = getTasker;
