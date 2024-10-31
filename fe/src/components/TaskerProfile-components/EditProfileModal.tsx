// EditProfileModal.tsx

import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { api } from '@/lib';
import { ProfileData } from './ProfileSection'; // Import the ProfileData type
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type EditProfileDialogProps = {
  profile: ProfileData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: ProfileData) => void;
};

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({
  profile,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAreaChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, location: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await api.put(
        '/submitWorkDetails/updateTaskerInfo',
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      // Extract the tasker object from the response
      const updatedTasker = response.data.tasker;
      onSave(updatedTasker);
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Location (District) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location (District)
            </label>
            <Select
              value={formData.location || ''}
              onValueChange={handleAreaChange}
            >
              <SelectTrigger className="w-full" aria-label="Select Area">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Чингэлтэй дүүрэг">
                  Чингэлтэй дүүрэг
                </SelectItem>
                <SelectItem value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</SelectItem>
                <SelectItem value="Сүхбаатар дүүрэг">
                  Сүхбаатар дүүрэг
                </SelectItem>
                <SelectItem value="Баянгол дүүрэг">Баянгол дүүрэг</SelectItem>
                <SelectItem value="Багануур дүүрэг">Багануур дүүрэг</SelectItem>
                <SelectItem value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</SelectItem>
                <SelectItem value="Сонгинохайрхан дүүрэг">
                  Сонгинохайрхан дүүрэг
                </SelectItem>
                <SelectItem value="Багахангай дүүрэг">
                  Багахангай дүүрэг
                </SelectItem>
                <SelectItem value="Налайх дүүрэг">Налайх дүүрэг</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSaving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving} className="ml-2">
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
