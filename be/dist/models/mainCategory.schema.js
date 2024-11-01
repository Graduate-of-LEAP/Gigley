"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainCategoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const mainCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subCategories: {
        type: [Schema.Types.ObjectId],
        ref: 'subCategory',
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
exports.mainCategoryModel = model('mainCategory', mainCategorySchema);
