import { IoIosAddCircle } from 'react-icons/io';

interface SubCategoryCardProps {
  subCategory: string;
  subCategoryId: string; // Pass the subCategoryId
  workDetails: any[]; // The work details for this subcategory
  onEdit: (details: any) => void; // Function to handle both add and edit
  onDelete: (subCategoryId: string) => void; // Function to handle delete, accepts subCategoryId
}

export const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subCategory,
  subCategoryId,
  workDetails,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className="h-fit border-2 border-dashed border-[#2a9df4] p-4 rounded-lg flex flex-col items-center justify-between cursor-pointer"
      // Open modal for adding or editing work details
    >
      {/* Conditionally render the prompt when no work details are present */}
      {workDetails.length === 0 && (
        <>
          <span className="text-[#2a9df4]">{subCategory}</span>
          <span className="text-[#1167b1]">нэмэлт мэдээллээ оруулна уу!</span>
          <IoIosAddCircle
            className="w-10 h-10 text-[#1167b1]"
            onClick={() => onEdit(workDetails[0] || null)}
          />
        </>
      )}

      {/* Display the work details when they exist */}
      {workDetails.length > 0 &&
        workDetails.map((detail) => (
          <div key={detail._id} className="rounded-lg w-full h-full">
            <p>
              <strong>Task Name:</strong> {detail.taskName}
            </p>
            <p>
              <strong>Minimum Hours:</strong> {detail.minHours}
            </p>
            <p>
              <strong>Vehicles:</strong> {detail.vehicles}
            </p>
            <p>
              <strong>Tools:</strong> {detail.tools}
            </p>
            <p>
              <strong>Skills and Experience:</strong>{' '}
              {detail.skillsAndExperience}
            </p>

            {/* Edit and Delete buttons */}
            <div className="flex justify-end space-x-2 mt-2">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => onEdit(detail)} // Edit action
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onDelete(subCategoryId)} // Delete the entire cart
              >
                Delete Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
