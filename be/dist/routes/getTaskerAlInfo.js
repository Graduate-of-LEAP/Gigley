"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_tasker_controller_1 = require("../controllers/tasker/get-tasker.controller");
const getTaskerAllInforouter = express_1.default.Router();
getTaskerAllInforouter.get('/get', get_tasker_controller_1.getTaskerController);
exports.default = getTaskerAllInforouter;
