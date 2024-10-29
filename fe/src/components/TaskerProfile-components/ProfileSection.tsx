// MainComponent.tsx
import React, { useState } from 'react';
import { Button } from '../ui/button';
import EditProfileDialog from './EditProfileModal';

type Profile = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  profileImage?: string;
};

const MainComponent: React.FC = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    fullName: 'Nomin Batbayar',
    email: 'creativitynomin@gmail.com',
    phone: '+1 6264218421',
    location: '60173',
    profileImage: undefined,
  });

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

      {/* Profile Information */}
      <div className="space-y-4 text-gray-700">
        <div>{/* Profile details here */}</div>
      </div>

      {/* Edit Profile Dialog */}
      {isEditDialogOpen && (
        <EditProfileDialog
          isOpen={isEditDialogOpen}
          profile={profile}
          onClose={handleCloseDialog}
          onSave={(updatedProfile) => {
            setProfile(updatedProfile);
            handleCloseDialog();
          }}
        />
      )}
    </div>
  );
};

export default MainComponent;
