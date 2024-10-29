import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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

export const taskModel = model('Task', taskSchema);
