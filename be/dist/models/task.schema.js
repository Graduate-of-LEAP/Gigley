"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const taskSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    taskerId: {
        type: Schema.Types.ObjectId,
        ref: 'taskers',
    },
    location: {
        type: String,
        required: true,
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true,
    },
    taskSize: {
        type: String,
        enum: ['Small', 'Medium', 'Large'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timeOfDay: {
        type: String,
        required: false,
    },
    specificDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'canceled'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
exports.taskModel = model('Task', taskSchema);
