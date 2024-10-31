// page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProfileSection, {
  ProfileData,
} from '@/components/TaskerProfile-components/ProfileSection';
import TaskDetailsSection from '@/components/TaskerProfile-components/TaskDetailsSection';
import { api } from '@/lib';
import { Container } from '@/components/assets/Container';
import { DashboardHeader } from '@/components/TaskerDashboard-components/DashboardHeader';

const TaskerProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('Profile');

  const fetchProfileData = async () => {
    try {
      const response = await api.get('/getTaskerAllInforouter/get', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleProfileUpdate = (updatedProfile: ProfileData) => {
    setProfileData(updatedProfile);
  };

  if (loading) return <div>Loading profile data...</div>;
  if (!profileData) return <div>Failed to load profile data.</div>;

  return (
    <Container>
      <DashboardHeader />
      <div className="flex h-screen">
        <aside className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-6">Your Account</h2>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveSection('Profile')}
              className={`text-left w-full py-2 px-4 rounded-lg font-semibold ${
                activeSection === 'Profile'
                  ? 'bg-gray-300'
                  : 'hover:bg-gray-200'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveSection('TaskDetails')}
              className={`text-left w-full py-2 px-4 rounded-lg font-semibold ${
                activeSection === 'TaskDetails'
                  ? 'bg-gray-300'
                  : 'hover:bg-gray-200'
              }`}
            >
              Task Details
            </button>
          </nav>
        </aside>

        <main className="w-3/4 p-8 bg-white border-l">
          <h1 className="text-2xl font-semibold mb-6">{activeSection}</h1>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            {activeSection === 'Profile' && profileData && (
              <ProfileSection
                profileData={profileData}
                onProfileUpdate={handleProfileUpdate}
              />
            )}
            {activeSection === 'TaskDetails' && profileData.workDetails && (
              <TaskDetailsSection
                workDetails={profileData.workDetails}
                onSave={(updatedWorkDetails) => {
                  setProfileData({
                    ...profileData,
                    workDetails: updatedWorkDetails,
                  });
                }}
              />
            )}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default TaskerProfilePage;
