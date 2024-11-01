"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const subCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true,
    },
    mainCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'mainCategory',
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
exports.subCategoryModel = model('subCategory', subCategorySchema);
