import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const workDetailsSchema = new Schema({
  taskerId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the tasker
    ref: 'taskers',
  },

  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the subcategory
    required: true,
  },

  taskName: {
    type: String,
    required: true,
  },
  minHours: {
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

export const workDetailsModel = model('workDetails', workDetailsSchema);
