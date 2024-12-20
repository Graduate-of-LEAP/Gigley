"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTasker = void 0;
const express_1 = require("express");
const getAll_tasker_controller_1 = require("../controllers/tasker/getAll.tasker.controller");
const get_tasker_byWork_controller_1 = require("../controllers/tasker/get-tasker-byWork.controller");
const allTasker = (0, express_1.Router)();
exports.allTasker = allTasker;
allTasker
    .get('/taskers', getAll_tasker_controller_1.getAllTaskerController)
    .get('/taskersWithWork', get_tasker_byWork_controller_1.getTaskersByWork);
