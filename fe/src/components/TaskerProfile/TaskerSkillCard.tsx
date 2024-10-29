import { Container } from '../assets/Container';
import { Button } from '../ui/button';

export const TaskerSkillCard = () => {
  const taskDetails = [
    { icon: '★', text: '5.0 (15 reviews)' },
    { icon: '✔️', text: '21 Appliance Installation & Repairs tasks' },
    { icon: '🚚', text: 'Vehicles: Full-size Van, Moving Truck' },
    { icon: '🛠️', text: 'Tools: Dolly, Ladder, Power drill, Power saw' },
  ];

  return (
    <Container className="bg-white">
      <div className="h-fit w-full flex flex-col p-6 bg-white border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">
            Appliance Installation & Repairs for $92.91
          </h2>
          <Button
            className="bg-green-600 h-[46px] w-[200px] text-white font-bold"
            variant="outline"
          >
            Select & Continue
          </Button>
        </div>

        <div className="flex flex-col">
          {taskDetails.map((detail, index) => (
            <div key={index} className="flex items-center text-gray-600 mb-2">
              <span className="mr-2">{detail.icon}</span>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
