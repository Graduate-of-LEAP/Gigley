"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskerRouter = void 0;
const express_1 = require("express");
const tasker_controller_1 = require("../controllers/tasker/tasker.controller");
const getTaskerRouter = (0, express_1.Router)();
exports.getTaskerRouter = getTaskerRouter;
getTaskerRouter.get('/get', tasker_controller_1.getTasker);
