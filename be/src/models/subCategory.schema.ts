import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const subCategorySchema = new Schema({
  subCategoryName: {
    type: String,
    required: true,
  },
  categoryId: {
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

export const subCategoryModel = model('subCategory', subCategorySchema);
