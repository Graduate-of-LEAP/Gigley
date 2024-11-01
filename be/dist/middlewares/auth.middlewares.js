"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    if (req.path.startsWith('/authTasker') ||
        req.path.startsWith('/user/register') ||
        req.path.startsWith('/user/login') ||
        req.path.startsWith('/mainCategory') ||
        req.path.startsWith('/subCategory'))
        return next();
    const auth = req.headers.authorization;
    const token = auth?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Please log in!' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || '');
        if (decoded.type === 'user') {
            req.user = decoded; // Set user property if needed
        }
        else if (decoded.type === 'tasker') {
            req.tasker = decoded; // Set tasker property
        }
        else {
            return res.status(403).json({ error: 'Access denied!' });
        }
        next();
    }
    catch (error) {
        console.error('JWT Verification Error:', error);
        return res.status(401).json({ error: 'Invalid or expired token!' });
    }
};
exports.authMiddleware = authMiddleware;
