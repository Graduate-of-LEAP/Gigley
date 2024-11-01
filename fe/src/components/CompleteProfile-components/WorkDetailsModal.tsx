import { useEffect, useState } from 'react';
import ImageUploader from './ImageUploader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WorkDetail } from '../TaskerProfile-components/ProfileSection';

interface WorkDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: WorkDetail) => void;
  existingDetails?: WorkDetail | null;
  Authorization: string | null;
}

export const WorkDetailsModal: React.FC<WorkDetailsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingDetails,
  Authorization,
}) => {
  const [hourlyRate, setHourlyRate] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [tools, setTools] = useState('');
  const [skillsAndExperience, setSkillsAndExperience] = useState('');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      if (existingDetails) {
        setHourlyRate(existingDetails.hourlyRate || '');
        setVehicles(existingDetails.vehicles || '');
        setTools(existingDetails.tools || '');
        setSkillsAndExperience(existingDetails.skillsAndExperience || '');
        setImages(existingDetails.images || []);
      } else {
        // Reset form fields
        setHourlyRate('');
        setVehicles('');
        setTools('');
        setSkillsAndExperience('');
        setImages([]);
      }
    }
  }, [existingDetails, isOpen]);

  const handleSave = () => {
    if (
      !hourlyRate ||
      !vehicles ||
      !tools ||
      !skillsAndExperience ||
      images.length === 0
    ) {
      toast.error('та бүтэн бөглөнө үү!');
      return;
    }

    const details: WorkDetail = {
      _id: existingDetails?._id || 'new_id',
      taskName: existingDetails?.taskName || 'Default Task Name',
      subCategoryId: existingDetails?.subCategoryId || 'defaultSubCategoryId',
      hourlyRate,
      vehicles,
      tools,
      skillsAndExperience,
      images,
      taskerId: '',
      createdAt: '',
      updatedAt: '',
      __v: 0,
    };

    onSave(details);
  };

  const handleCancel = () => {
    // Reset form fields
    setHourlyRate('');
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
            <label className="block text-gray-700">Цагийн үнэлгээ</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="50'000 төгрөг"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              Тээврийн хэрэгсэлийн мэдээллээ оруулна уу?
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="Портер,  Амжиргаа цагаан "
              value={vehicles}
              onChange={(e) => setVehicles(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Хэрэгслийн мэдээлэл</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              placeholder="Алх , дрилл , шат "
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              Ур чадвар өмнөх туршилгаа дэлгэрэнгүй тайлбарлана уу?
            </label>
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
              Цуцлах
            </button>

            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSave}
            >
              Хадгалах
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
