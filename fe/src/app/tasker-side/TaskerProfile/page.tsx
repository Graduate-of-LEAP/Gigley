// TaskerProfilePage.tsx

'use client';

import React, { useState } from 'react';

import ProfileSection from '@/components/TaskerProfile-components/ProfileSection';
import TaskDetailsSection from '@/components/TaskerProfile-components/TaskDetailsSection';
import { Container } from '@/components/assets/Container';

const sections = [
  { name: 'Profile', component: ProfileSection },

  { name: 'Task Details', component: TaskDetailsSection },
];

const TaskerProfilePage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].name);

  const renderSection = () => {
    const selectedSection = sections.find(
      (section) => section.name === activeSection
    );
    return selectedSection ? <selectedSection.component /> : null;
  };

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
