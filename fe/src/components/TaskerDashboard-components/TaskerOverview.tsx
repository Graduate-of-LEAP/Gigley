// TaskerOverview.tsx

import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

type TaskerOverviewProps = {
  tasker: Tasker | null;
};

export const TaskerOverview = ({ tasker }: TaskerOverviewProps) => {
  if (!tasker) return null;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#2a9df4]">
      <h2 className="text-2xl font-semibold text-[#1167b1] mb-4">
        Welcome, {tasker.firstName} {tasker.lastName}
      </h2>
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Email:</strong> {tasker.email}
        </p>
        <p>
          <strong>Phone:</strong> {tasker.phone}
        </p>
        <p>
          <strong>Location:</strong> {tasker.location}
        </p>
        <p>
          <strong>Member Since:</strong>{' '}
          {new Date(tasker.createdAt).toLocaleDateString()}
        </p>
      </div>
      <h3 className="text-lg font-medium text-[#2a9df4] mt-6">
        Skills & Experience
      </h3>
      {tasker.workDetails.length > 0 ? (
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
          {tasker.workDetails.map((work, index) => (
            <li key={index}>
              <span className="font-semibold">{work.taskName}:</span>{' '}
              {work.skillsAndExperience}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-gray-500">No skills listed yet.</p>
      )}
    </div>
  );
};
