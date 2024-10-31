import { Container } from '../assets/Container';
import { VscFeedback } from 'react-icons/vsc';

export const DescriptionOfTask = () => {
  return (
    <Container className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-3 text-gray-700">
        <VscFeedback className="text-blue-500 text-lg" />
        <h2 className="text-lg font-semibold">Describe Your Task</h2>
      </div>
      <p className="text-sm text-gray-700">
        Tell us about your task. We use these details to show Taskers in your
        area who fit your needs.
      </p>
    </Container>
  );
};
