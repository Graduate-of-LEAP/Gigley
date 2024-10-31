import { Request, Response } from 'express';
import { taskerModel } from '../../models';

// Update tasker information
export const UpdateTaskerInfoController = async (
  req: Request,
  res: Response
) => {
  const taskerId = req.tasker.id; // Ensure tasker ID is accessible from authentication middleware
  const {
    firstName,
    lastName,
    email,
    phone,
    location,
    profileImage,
    workDetailsIds, // optional: work details if they need updating
  } = req.body;

  try {
    // Prepare update data
    const updateData: any = {};
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (location) updateData.location = location;
    if (profileImage) updateData.profileImage = profileImage;

    // Add work details if provided
    if (workDetailsIds) {
      updateData.workDetails = { $addToSet: { $each: workDetailsIds } }; // Prevent duplicates
    }

    // Find tasker and update information
    const tasker = await taskerModel.findByIdAndUpdate(taskerId, updateData, {
      new: true,
    });

    if (!tasker) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', tasker });
  } catch (error) {
    console.error('Error updating tasker information:', error);
    res.status(500).json({ message: 'Error updating tasker information' });
  }
};
