import { IoIosAddCircle } from 'react-icons/io';
import { WorkDetail } from '../TaskerProfile-components/ProfileSection';

interface SubCategoryCardProps {
  subCategory: string;
  subCategoryId: string;
  workDetails: WorkDetail[]; // Array of work details, including images
  onEdit: (details: WorkDetail | null) => void;
  onDelete: (workDetailId: string) => void;
}

export const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subCategory,
  workDetails,
  onEdit,
  onDelete,
}) => {
  const formatCurrency = (value: number | string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MNT', // assuming Mongolian Tögrög, adjust as needed
      minimumFractionDigits: 0,
    }).format(Number(value));
  };

  return (
    <div className="h-fit border-2 border-dashed border-[#2a9df4] p-4 rounded-lg flex flex-col items-center justify-between">
      {workDetails.length === 0 ? (
        <>
          {/* Add prompt to add details */}
          <span className="text-[#2a9df4]">{subCategory}</span>
          <span className="text-[#1167b1]">Нарийн мэдээллээ нэмнэ үү!</span>
          <IoIosAddCircle
            className="w-10 h-10 text-[#1167b1]"
            onClick={() => onEdit(null)}
          />
        </>
      ) : (
        workDetails.map((detail) => (
          <div key={detail._id} className="rounded-lg w-full h-full">
            <p>
              <strong>Task Name:</strong> {detail.taskName}
            </p>
            <p>
              <strong>hourly rate:</strong>
              {formatCurrency(detail.hourlyRate)}
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

            {/* Display uploaded images */}
            {detail.images && detail.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {detail.images.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`uploaded image ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                ))}
              </div>
            )}

            {/* Edit and Delete buttons */}
            <div className="flex justify-end space-x-2 mt-2">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => onEdit(detail)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onDelete(detail._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
