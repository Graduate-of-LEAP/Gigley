"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workDetailsRouter = void 0;
const express_1 = require("express");
const get_workDetails_controller_1 = require("../controllers/WorkDetails/get-workDetails.controller");
const create_WorkDetails_controller_1 = require("../controllers/WorkDetails/create-WorkDetails.controller");
const update_workDetails_controller_1 = require("../controllers/WorkDetails/update-workDetails.controller");
const delete_workDetails_controller_1 = require("../controllers/WorkDetails/delete-workDetails.controller"); // Import delete controller
const get_SpecificWorkDetails_controller_1 = require("../controllers/WorkDetails/get-SpecificWorkDetails.controller");
const workDetailsRouter = (0, express_1.Router)();
exports.workDetailsRouter = workDetailsRouter;
workDetailsRouter.post('/create', create_WorkDetails_controller_1.createWorkDetailsController);
workDetailsRouter.get('/get', get_workDetails_controller_1.getWorkDetailsController);
workDetailsRouter.put('/update/:id', update_workDetails_controller_1.updateWorkDetailsController);
workDetailsRouter.delete('/delete/:workDetailId', delete_workDetails_controller_1.deleteWorkDetailByIdController);
workDetailsRouter.get('/getWorkDetailsBySubcategory', get_SpecificWorkDetails_controller_1.getSpecificWorkDetailController);
