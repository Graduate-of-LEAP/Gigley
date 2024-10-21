import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mainCategorySchema = new Schema({
  name: {
    type: String,
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

export const mainCategoryModel = model('mainCategory', mainCategorySchema);
