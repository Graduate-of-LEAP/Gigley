import { useEffect, useState } from 'react';
import ImageUploader from './ImageUploader';

interface WorkDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: any) => void;
  existingDetails?: any | null;
  Authorization: string | null;
}

export const WorkDetailsModal: React.FC<WorkDetailsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingDetails,
  Authorization,
}) => {
  const [minHours, setMinHours] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [tools, setTools] = useState('');
  const [skillsAndExperience, setSkillsAndExperience] = useState('');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      if (existingDetails) {
        setMinHours(existingDetails.minHours || '');
        setVehicles(existingDetails.vehicles || '');
        setTools(existingDetails.tools || '');
        setSkillsAndExperience(existingDetails.skillsAndExperience || '');
        setImages(existingDetails.images || []);
      } else {
        // Reset form fields
        setMinHours('');
        setVehicles('');
        setTools('');
        setSkillsAndExperience('');
        setImages([]);
      }
    }
  }, [existingDetails, isOpen]);

  const handleSave = () => {
    if (
      !minHours ||
      !vehicles ||
      !tools ||
      !skillsAndExperience ||
      images.length === 0
    ) {
      alert('Please complete all fields and upload at least one image.');
      return;
    }

    const details = {
      minHours,
      vehicles,
      tools,
      skillsAndExperience,
      images,
    };
    onSave(details);
  };

  const handleCancel = () => {
    // Reset form fields
    setMinHours('');
    setVehicles('');
    setTools('');
    setSkillsAndExperience('');
    setImages([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">
          {existingDetails ? 'Edit Work Details' : 'Add Work Details'}
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">
              Minimum Hours Available
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="e.g. 5 hours"
              value={minHours}
              onChange={(e) => setMinHours(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Vehicles</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="e.g. Truck, Van"
              value={vehicles}
              onChange={(e) => setVehicles(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Tools</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="e.g. Drill, Ladder"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Skills and Experience</label>
            <textarea
              className="border border-gray-300 rounded-lg w-full p-2"
              rows={4}
              placeholder="Describe your relevant experience..."
              value={skillsAndExperience}
              onChange={(e) => setSkillsAndExperience(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <ImageUploader
              images={images}
              setImages={setImages}
              Authorization={Authorization}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
