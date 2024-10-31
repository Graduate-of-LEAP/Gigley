import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { WorkDetail } from './ProfileSection'; // Adjust the import path if necessary
import { api } from '@/lib';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TaskDetailModalProps = {
  task: WorkDetail;
  onClose: () => void;
  onSave: (updatedTask: WorkDetail) => void;
  isSaving: boolean;
};

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onSave,
  isSaving,
}) => {
  const [formData, setFormData] = useState<WorkDetail>(task);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      const file = e.target.files[0];
      const formDataImage = new FormData();
      formDataImage.append('image', file);

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Authorization token is missing');
          setIsUploading(false);
          return;
        }

        const response = await api.post('/upload', formDataImage, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        const imageUrl = response.data.secure_url;
        setFormData((prevData) => ({
          ...prevData,
          images: [...(prevData.images || []), imageUrl],
        }));
        toast.success('Таны зураг амжилттай нэмэгдлээ');
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prevData) => {
      const newImages = [...(prevData.images || [])];
      newImages.splice(index, 1);
      return { ...prevData, images: newImages };
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task Detail</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          {/* Hourly Rate */}
          <div>
            <label className="block text-gray-600 font-medium">
              Hourly Rate
            </label>
            <input
              type="text"
              name="hourlyRate" // Corrected to camelCase
              value={formData.hourlyRate || ''} // Allowing empty string for easy deletion
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Vehicles */}
          <div>
            <label className="block text-gray-600 font-medium">Vehicles</label>
            <input
              type="text"
              name="vehicles"
              value={formData.vehicles || ''} // Allowing empty string
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Tools */}
          <div>
            <label className="block text-gray-600 font-medium">Tools</label>
            <input
              type="text"
              name="tools"
              value={formData.tools || ''} // Allowing empty string
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Skills and Experience */}
          <div>
            <label className="block text-gray-600 font-medium">
              Skills and Experience
            </label>
            <textarea
              name="skillsAndExperience"
              value={formData.skillsAndExperience || ''} // Allowing empty string
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-gray-600 font-medium">Images</label>
            <div className="flex flex-wrap space-x-4 mt-2">
              {formData.images &&
                formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt="Task"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                    >
                      &times;
                    </button>
                  </div>
                ))}
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Upload New Image
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="mt-1"
              />
              {isUploading && <p>Uploading image...</p>}
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSaving}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving || isUploading}
            className="ml-2"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
