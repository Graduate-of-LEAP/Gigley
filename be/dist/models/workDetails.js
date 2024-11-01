"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workDetailsModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const workDetailsSchema = new Schema({
    taskerId: {
        type: mongoose_1.default.Schema.Types.ObjectId, // Reference to the tasker
        ref: 'taskers',
        required: true,
    },
    subCategoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId, // Reference to the subcategory
        required: true,
    },
    taskName: {
        type: String,
        required: true,
    },
    images: [String],
    hourlyRate: {
        type: String,
        required: true,
    },
    vehicles: {
        type: String,
        required: true,
    },
    tools: {
        type: String,
        required: true,
    },
    skillsAndExperience: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
exports.workDetailsModel = model('workDetails', workDetailsSchema);
