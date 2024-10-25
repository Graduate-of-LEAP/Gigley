import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const taskerSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  workDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: 'workDetails', // Reference to the workDetails model
    },
  ],
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

export const taskerModel = model('taskers', taskerSchema);
