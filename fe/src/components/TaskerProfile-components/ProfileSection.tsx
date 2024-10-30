// ProfileSection.tsx

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { User, Mail, Phone, MapPin } from 'lucide-react';

import EditProfileDialog from './EditProfileModal';
import { ProfileData } from '@/app/tasker-side/TaskerProfile/page';

type ProfileSectionProps = {
  profileData: ProfileData;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ profileData }) => {
  const fullName = `${profileData.lastName} ${profileData.firstName}`;
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsEditDialogOpen(true);
  const handleCloseDialog = () => setIsEditDialogOpen(false);

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

      <div className="flex items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {profileData.profileImage ? (
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-gray-400" size={48} />
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
          <span>{profileData.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone />
          <span>{profileData.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin />
          <span>{profileData.location}</span>
        </div>
      </div>

      <div className="mt-6">
        <Button variant="outline" className="w-full text-gray-700">
          Log Out
        </Button>
      </div>

      {/* Edit Profile Dialog */}
      {isEditDialogOpen && (
        <EditProfileDialog
          isOpen={isEditDialogOpen}
          profile={profileData}
          onClose={handleCloseDialog}
          onSave={(updatedProfile) => {
            // Here you would update the profile data if needed
            console.log('Profile updated:', updatedProfile);
            handleCloseDialog();
          }}
        />
      )}
    </div>
  );
};

export default ProfileSection;
