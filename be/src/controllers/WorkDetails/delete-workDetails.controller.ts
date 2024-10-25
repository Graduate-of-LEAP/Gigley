import { Request, Response } from 'express';
import { workDetailsModel } from '../../models/workDetails';

export const deleteWorkDetailsController = async (
  req: Request,
  res: Response
) => {
  const { subCategoryId } = req.params; // Get the subCategoryId from the request parameters

  console.log('subCategoryId received in request:', subCategoryId); // Log the received subCategoryId

  try {
    // Delete all work details associated with the subCategoryId
    const result = await workDetailsModel.deleteMany({ subCategoryId });

    if (result.deletedCount === 0) {
      // No work details were found and deleted
      return res
        .status(404)
        .json({ message: 'No work details found for this subcategory' });
    }

    // Successfully deleted all work details for the subCategoryId
    return res
      .status(200)
      .json({ message: 'Work details deleted successfully' });
  } catch (error) {
    console.error('Error deleting work details:', error);
    return res.status(500).json({ message: 'Error deleting work details' });
  }
};
