"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const register_user_controller_1 = require("../controllers/user/register-user.controller");
const login_user_controller_1 = require("../controllers/user/login-user.controller");
const get_me_controller_1 = require("../controllers/user/get-me.controller");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter
    .post('/register', register_user_controller_1.registerController)
    .post('/login', login_user_controller_1.loginController)
    .get('/me', get_me_controller_1.getMeController);
