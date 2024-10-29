// TaskerProfilePage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import ProfileSection from '@/components/TaskerProfile-components/ProfileSection';
import TaskDetailsSection from '@/components/TaskerProfile-components/TaskDetailsSection';
import { Container } from '@/components/assets/Container';
import { api } from '@/lib';

type WorkDetails = {
  _id: string;
  taskerId: string;
  subCategoryId: string;
  taskName: string;
  images: [];
  minHours: string;
  vehicles: string;
  tools: string;
  skillsAndExperience: string;
};

export type ProfileData = {
  _id: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  workDetails: WorkDetails[];
};

const sections = [
  { name: 'Profile', component: ProfileSection },
  { name: 'Task Details', component: TaskDetailsSection },
];

const TaskerProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].name);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await api.get('/getTaskerAllInforouter/get/', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const renderSection = () => {
    const selectedSection = sections.find(
      (section) => section.name === activeSection
    );

    if (!selectedSection || !profileData) return null;

    const SectionComponent = selectedSection.component;

    return <SectionComponent profileData={profileData} />;
  };

  if (loading) return <div>Loading...</div>;
  if (!profileData) return <div>Failed to load profile data.</div>;

  return (
    <Container>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-6">Your Account</h2>
          <nav className="space-y-4">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`text-left w-full py-2 px-4 rounded-lg ${
                  activeSection === section.name
                    ? 'bg-gray-300 font-semibold'
                    : 'hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="w-3/4 p-8 bg-white border-l">
          <h1 className="text-2xl font-semibold mb-6">{activeSection}</h1>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            {renderSection()}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default TaskerProfilePage;
