import { Request, Response } from 'express';
import { workDetailsModel } from '../../models/workDetails';

// Update work details
export const updateWorkDetailsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params; // Ensure that 'id' is correctly received from the request parameters
  const updateData = req.body; // Updated data from request body

  console.log('updateDate', updateData);

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is missing' });
  }

  try {
    // Find the work details by ID and update it with new data
    const updatedWorkDetails = await workDetailsModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the update data against schema
      }
    );

    // If no work details found with that ID, return 404
    if (!updatedWorkDetails) {
      return res.status(404).json({ message: 'Work details not found' });
    }

    // Return the updated work details
    return res.status(200).json(updatedWorkDetails);
  } catch (error) {
    console.error('Error updating work details:', error);
    return res.status(500).json({ message: 'Error updating work details' });
  }
};
