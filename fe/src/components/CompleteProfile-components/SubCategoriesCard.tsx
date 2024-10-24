import { IoIosAddCircle } from 'react-icons/io';

interface SubCategoryCardProps {
  subCategory: string;
  workDetails: any[]; // The work details for this subcategory
  onEdit: () => void;
}

export const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subCategory,
  workDetails,
  onEdit,
}) => {
  return (
    <div
      className="h-fit border-2 border-dashed border-[#2a9df4] p-4 rounded-lg flex flex-col items-center justify-between cursor-pointer"
      onClick={onEdit}
    >
      {/* Conditionally render the prompt when no work details are present */}
      {workDetails.length === 0 && (
        <>
          <span className="text-[#2a9df4]">{subCategory}</span>
          <span className="text-[#1167b1]">нэмэлт мэдээллээ оруулна уу!</span>
          <IoIosAddCircle className="w-10 h-10 text-[#1167b1]" />
        </>
      )}

      {/* Display the work details when they exist */}
      {workDetails.length > 0 &&
        workDetails.map((detail) => (
          <div key={detail._id} className=" rounded-lg   w-full h-full">
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
          </div>
        ))}
    </div>
  );
};
