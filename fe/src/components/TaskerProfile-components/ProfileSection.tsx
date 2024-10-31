/// ProfileSection.tsx

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { User, Mail, Phone, MapPin, PlusCircle } from 'lucide-react';
import EditProfileDialog from './EditProfileModal';
import { api } from '@/lib';

export type WorkDetail = {
  _id: string;
  taskerId: string;
  subCategoryId: string;
  taskName: string;
  images: string[];
  hourlyRate: string;
  vehicles: string;
  tools: string;
  skillsAndExperience: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProfileData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  location: string;
  profileImage?: string;
  workDetails?: WorkDetail[];
};

type ProfileSectionProps = {
  profileData: ProfileData;
  onProfileUpdate: (updatedProfile: ProfileData) => void;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileData,
  onProfileUpdate,
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [localProfileData, setLocalProfileData] =
    useState<ProfileData>(profileData);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setLocalProfileData(profileData);
  }, [profileData]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Authorization token is missing');
          setIsUploading(false);
          return;
        }

        // Step 1: Upload image to get URL
        const uploadResponse = await api.post('/upload', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        const imageUrl =
          uploadResponse.data.secure_url || uploadResponse.data.url;

        // Step 2: Send image URL to backend to update profile image
        await api.post(
          '/submitWorkDetails/uploadImage',
          { profileImage: imageUrl },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updatedProfile = {
          ...localProfileData,
          profileImage: imageUrl,
        };
        setLocalProfileData(updatedProfile);
        onProfileUpdate(updatedProfile);
      } catch (error) {
        console.error('Error uploading profile image:', error);
        alert('Failed to upload profile image');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleOpenDialog = () => setIsEditDialogOpen(true);
  const handleCloseDialog = () => setIsEditDialogOpen(false);

  const handleSave = (updatedProfile: ProfileData) => {
    setLocalProfileData(updatedProfile);
    onProfileUpdate(updatedProfile);
    handleCloseDialog();
    console.log('Updated Profile:', updatedProfile);
  };

  const fullName = `${localProfileData.firstName || 'No First Name'} ${
    localProfileData.lastName || 'No Last Name'
  }`;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Account</h2>
        <Button
          variant="outline"
          className="text-gray-700"
          onClick={handleOpenDialog}
        >
          Edit
        </Button>
      </div>

      <div className="flex items-center mb-6 relative">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative">
          {localProfileData.profileImage ? (
            <img
              src={localProfileData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-gray-400" size={48} />
          )}
          <label className="absolute bottom-0 right-8 bg-white rounded-full p-1 cursor-pointer ">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUploading}
            />
            <PlusCircle className="text-gray-500" size={15} />
          </label>
          {isUploading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
              <p className="text-gray-700">Uploading...</p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center space-x-2">
          <User />
          <span>{fullName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail />
          <span>{localProfileData.email || 'No Email Available'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone />
          <span>{localProfileData.phone || 'No Phone Available'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin />
          <span>{localProfileData.location || 'No Location Available'}</span>
        </div>
      </div>

      {isEditDialogOpen && (
        <EditProfileDialog
          isOpen={isEditDialogOpen}
          profile={localProfileData}
          onClose={handleCloseDialog}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProfileSection;
