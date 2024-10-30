// TaskDetailsSection.tsx

import React, { useState } from 'react';
import { Button } from '../ui/button';

const TaskDetailsSection: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [availability, setAvailability] = useState('Full-time');
  const [skills, setSkills] = useState([
    'Furniture Assembly',
    'Plumbing',
    'Electrical Work',
  ]);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Task Details
      </h2>

      {/* Hourly Rate */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Hourly Rate
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseInt(e.target.value))}
            className="border border-gray-300 rounded-lg p-2 w-24 text-gray-700"
          />
          <span className="text-gray-600">USD/hr</span>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Availability
        </label>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full text-gray-700"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Weekends only">Weekends only</option>
        </select>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Skills</label>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-700">{skill}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRemoveSkill(skill)}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add new skill"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <Button onClick={handleAddSkill} variant="outline" size="sm">
              Add
            </Button>
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="mt-6">
        <Button
          className="w-full bg-blue-600 text-white"
          onClick={() => alert('Task details updated')}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailsSection;
