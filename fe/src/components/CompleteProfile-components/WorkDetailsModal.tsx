import { useState } from 'react';

interface WorkDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: any) => void;
}

export const WorkDetailsModal: React.FC<WorkDetailsModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [minHours, setMinHours] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [tools, setTools] = useState('');
  const [skillsAndExperience, setSkillsAndExperience] = useState('');
  const [taskName, setTaskName] = useState('');

  const handleSave = () => {
    onSave({ minHours, vehicles, tools, skillsAndExperience, taskName });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add Work Details</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Task Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g. Plumbing"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              Minimum Hours Available
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={minHours}
              onChange={(e) => setMinHours(e.target.value)}
              placeholder="e.g. 5 hours"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Vehicles</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={vehicles}
              onChange={(e) => setVehicles(e.target.value)}
              placeholder="e.g. Truck, Van"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Tools</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              placeholder="e.g. Drill, Ladder"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Skills and Experience</label>
            <textarea
              className="border border-gray-300 rounded-lg w-full p-2"
              value={skillsAndExperience}
              onChange={(e) => setSkillsAndExperience(e.target.value)}
              rows={4}
              placeholder="Describe your relevant experience..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-[#1167b1] text-white px-4 py-2 rounded-lg"
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
