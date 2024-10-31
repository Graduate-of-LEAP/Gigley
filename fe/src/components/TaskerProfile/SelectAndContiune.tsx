// File: /components/TaskerProfile/SelectAndContinue.tsx
import { Container } from '../assets/Container';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { WorkDetail } from '@/app/tasker-side/TaskerDashboard/page'; // Ensure this import is correct

type SelectAndContinueProps = {
  workDetails: WorkDetail[];
};

export const SelectAndContinue = ({ workDetails }: SelectAndContinueProps) => {
  return (
    <Container className="bg-white">
      <div className="w-[907px] h-auto">
        {workDetails.map((service, index) => (
          <div
            key={index}
            className="w-full h-[216px] border mb-6 rounded p-6 flex justify-between"
          >
            <div className="flex flex-col justify-between">
              <h2 className="font-bold">
                {service.taskName} for ${service.minHours * 30} {/* Sample rate */}
              </h2>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <p>
                  5.0 (15 reviews) {/* Sample rating & reviews */}
                </p>
              </div>
              <p>{service.skillsAndExperience}</p>
              <p className="text-green-600">View Profile & Reviews</p>
            </div>
            <Button
              className="bg-green-600 h-[46px] w-[200px] text-white font-bold"
              variant="outline"
            >
              Select & Continue...
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};
